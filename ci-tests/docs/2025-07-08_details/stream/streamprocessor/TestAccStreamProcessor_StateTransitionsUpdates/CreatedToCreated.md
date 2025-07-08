# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
### 2025-07-01
#### PASS 6 seconds
#### PASS 8 seconds
### 2025-07-02
#### PASS 6 seconds
### 2025-07-03
#### PASS 7 seconds
### 2025-07-04
#### PASS 6 seconds
### 2025-07-05
#### PASS 8 seconds
### 2025-07-06
#### FAIL 37 seconds
```
2025-07-06T00:48:43.0085460Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-06T00:48:43.0086189Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-07-06T00:48:43.0096139Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-06T00:48:43.0196321Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-06T00:48:43.0196991Z     resource_test.go:172: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:48:43.0197543Z         
2025-07-06T00:48:43.0197820Z         Error: error during resource delete
2025-07-06T00:48:43.0198087Z         
2025-07-06T00:48:43.0198843Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-6684480946218533807--CREATED-CREATED
2025-07-06T00:48:43.0199667Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-06T00:48:43.0200251Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0200653Z         BadRequestDetail: 
2025-07-06T00:48:43.0204818Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (37.11s)
```
### 2025-07-07
#### PASS 7 seconds
### 2025-07-08
#### PASS 7 seconds