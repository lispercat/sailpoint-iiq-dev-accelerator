<#
.SYNOPSIS
Parse list of XML rule templates to generate VSCode snippets

.PARAMETER XmlPath
Path to the XML File
.PARAMETER 
#>
[CmdletBinding()]
param (
    [Parameter(Mandatory)]
    [ValidateScript({ Test-Path -PathType Leaf -Path $_ })]
    [string]
    $XmlPath,
    
    [string]
    $output = "./snippets.json"
)
$ErrorActionPreference = "stop"
function Format-Xml {
    #.Synopsis
    # Pretty-print formatted XML source
    #.Description
    # Runs an XmlDocument through an auto-indenting XmlWriter
    #.Example
    # [xml]$xml = get-content Data.xml
    # C:\PS>Format-Xml $xml
    #.Example
    # get-content Data.xml | Format-Xml
    #.Example
    # Format-Xml C:\PS\Data.xml -indent 1 -char `t
    # Shows how to convert the indentation to tabs (which can save bytes dramatically, while preserving readability)
    #.Example
    # ls *.xml | Format-Xml
    #
    [CmdletBinding()]
    param(
        # The Xml Document
        [Parameter(Position = 0, Mandatory = $true, ValueFromPipeline = $true, ParameterSetName = "Document")]
        $Xml,

        # The path to an xml document (on disc or any other content provider).
        [Parameter(Position = 0, Mandatory = $true, ValueFromPipelineByPropertyName = $true, ParameterSetName = "File")]
        [Alias("PsPath")]
        [string]$Path,

        # The indent level (defaults to 2 spaces)
        [Parameter(Mandatory = $false)]
        [int]$Indent = 2,

        # The indent character (defaults to a space)
        [char]$Character = ' '
    )
    process {
        ## Load from file, if necessary
        if ($Path) { [xml]$xml = Get-Content $Path }

        $StringWriter = New-Object System.IO.StringWriter
        $XmlWriter = New-Object System.XMl.XmlTextWriter $StringWriter
        $xmlWriter.Formatting = "indented"
        $xmlWriter.Indentation = $Indent
        $xmlWriter.IndentChar = $Character
        $xml.WriteTo($XmlWriter)
        $XmlWriter.Flush()
        $StringWriter.Flush()
        Write-Output $StringWriter.ToString()
    }
}
[xml]$xml = gc $XmlPath
$rules = $xml.GetElementsByTagName("Rule") 
$snippets = New-Object -Type PSObject -Property @{}

foreach ($rule in $rules) {
    if (-not $rule.type) {
        continue
    }
    $snippetName = "$($rule.name)"
    $prefix = "rule-" + $rule.type.ToLower()
    $description = "Create a $($rule.Name.Replace(" Template",'')) rule"
 

    # Adding placeholder for name
    $rule.name = "`${1:`${TM_FILENAME_BASE}}"
    
    # Adding source and placeholder for source code
    if (-not $rule.Source) {
        $child = $xml.CreateElement("Source")
        $child = $rule.AppendChild($child)
        $cdata = $xml.CreateCDataSection("
        `$0
        ");
        $child.AppendChild($cdata) | Out-Null
    }
    
    $body = [System.Collections.ArrayList]@("<?xml version='1.0' encoding='UTF-8'?>",
        "<!DOCTYPE Rule PUBLIC `"sailpoint.dtd`" `"sailpoint.dtd`">")
    $body.AddRange( (Format-Xml $rule).Replace("`r", "").split("`n"))

    $snippets | Add-Member -Name $snippetName -Type NoteProperty -Value @{
        "prefix"      = $prefix
        "description" = $description
        "body"        = $body
    }
}

ConvertTo-Json -Depth 100 $snippets | Out-File $output


