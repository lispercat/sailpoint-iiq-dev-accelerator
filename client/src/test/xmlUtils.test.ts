import * as assert from 'assert'
import { sanitizeIIQObjectName } from '../xmlUtils'

describe('Sanitize Object Names', () => {
    it("should remove forward slashes from object names", () => {
        const objName = "someObject/Name123"
        const sanitized = sanitizeIIQObjectName(objName)
        assert.strictEqual(sanitized, "someObject_Name123", "object name does not match as expected")
    })

    it("should remove backslashes from object name", () => {
        const objName = "someObject\\Name123"
        const sanitized = sanitizeIIQObjectName(objName)
        assert.strictEqual(sanitized, "someObject_Name123", "object name does not match as expected")
    })

    it("should not remove dots from object names", () => {
        const objName = "someObject.Name123"
        const sanitized = sanitizeIIQObjectName(objName)
        assert.strictEqual(sanitized, objName, "there should be no change to this object's name")
    })

    it("should not remove hyphens from object names", () => {
        const objName = "someObject-Name123"
        const sanitized = sanitizeIIQObjectName(objName) 
        assert.strictEqual(sanitized, objName, "there should be no change to this object's name")
    })
    
    it("should not remove underscores from object names", () => {
        const objName = "someObject_Name123"
        const sanitized = sanitizeIIQObjectName(objName) 
        assert.strictEqual(sanitized, objName, "there should be no change to this object's name")
    })

    it("should replace whitespace with underscores", () => {
        const objName = "someObject Name123"
        const sanitized = sanitizeIIQObjectName(objName) 
        assert.strictEqual(sanitized, "someObject_Name123", "there should be no spaces left in the object name") 
    })

    it("should replace other non-alphanumeric characters with underscores", () => {
        const objName = "some#Object&N@me123"
        const sanitized = sanitizeIIQObjectName(objName)
        assert.strictEqual(sanitized, "some_Object_N_me123", "object name does not match expected output")
    })

    it("should not replace or remove unicode characters", () => {
        const objName = "ЭКСПЕРТНЫЙ ОТДЕЛ"
        const sanitized = sanitizeIIQObjectName(objName)
        assert.strictEqual(sanitized, "ЭКСПЕРТНЫЙ_ОТДЕЛ", "object name does not match expected output")
    })
})