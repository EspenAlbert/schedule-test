# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## Timeline
### 2025-07-01
#### PASS 9 seconds
```
2025-07-01T08:50:28.2744313Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-01T08:50:28.2745779Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-07-01T08:50:28.2765357Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-01T08:50:28.2771980Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (9.22s)
```
#### PASS 6 seconds
```
2025-07-01T12:50:20.6079423Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-01T12:50:20.6080140Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-07-01T12:50:20.6090018Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-01T12:50:20.6093536Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (6.56s)
```
#### PASS 8 seconds
```
2025-07-01T17:50:24.3494560Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-01T17:50:24.3495893Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-07-01T17:50:24.3514270Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-01T17:50:24.3520789Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (8.53s)
```
### 2025-07-02
#### PASS 6 seconds
```
2025-07-02T00:46:31.9223234Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-02T00:46:31.9224801Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-07-02T00:46:31.9243678Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-02T00:46:31.9250160Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (6.47s)
```
### 2025-07-03
#### PASS 7 seconds
```
2025-07-03T00:46:39.9549473Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-03T00:46:39.9550219Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-07-03T00:46:39.9563514Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-03T00:46:39.9567279Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (7.46s)
```
### 2025-07-04
#### PASS 6 seconds
```
2025-07-04T00:51:07.7063348Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-04T00:51:07.7064291Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-07-04T00:51:07.7076991Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-04T00:51:07.7080821Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (6.59s)
```
### 2025-07-05
#### PASS 8 seconds
```
2025-07-05T00:44:07.5880314Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-05T00:44:07.5881633Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-07-05T00:44:07.5899704Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-05T00:44:07.5906354Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (8.72s)
```
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
```
2025-07-07T00:48:05.7818478Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-07T00:48:05.7819209Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-07-07T00:48:05.7829395Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-07T00:48:05.7833827Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (7.28s)
```
### 2025-07-08
#### PASS 7 seconds
```
2025-07-08T00:45:56.1176671Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-08T00:45:56.1178007Z     resource_test.go:171: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-07-08T00:45:56.1196143Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-07-08T00:45:56.1202577Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (7.53s)
```