# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## Timeline
### 2025-07-01
#### PASS 16 seconds
```
2025-07-01T08:50:28.2758222Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-01T08:50:28.2759434Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-07-01T08:50:28.2769085Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-01T08:50:28.2778156Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (16.94s)
```
#### PASS 13 seconds
```
2025-07-01T12:50:20.6086434Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-01T12:50:20.6087055Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-07-01T12:50:20.6091572Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-01T12:50:20.6096605Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (13.29s)
```
#### PASS 15 seconds
```
2025-07-01T17:50:24.3507790Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-01T17:50:24.3508964Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-07-01T17:50:24.3517158Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-01T17:50:24.3526745Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (15.74s)
```
### 2025-07-02
#### PASS 12 seconds
```
2025-07-02T00:46:31.9236777Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-02T00:46:31.9237982Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-07-02T00:46:31.9248210Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-02T00:46:31.9254479Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (12.25s)
```
### 2025-07-03
#### PASS 13 seconds
```
2025-07-03T00:46:39.9557916Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-03T00:46:39.9558570Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-07-03T00:46:39.9564990Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-03T00:46:39.9570449Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (13.94s)
```
### 2025-07-04
#### PASS 12 seconds
```
2025-07-04T00:51:07.7072829Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-04T00:51:07.7073733Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-07-04T00:51:07.7079732Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-04T00:51:07.7084096Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (12.29s)
```
### 2025-07-05
#### PASS 16 seconds
```
2025-07-05T00:44:07.5893224Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-05T00:44:07.5894540Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-07-05T00:44:07.5903380Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-05T00:44:07.5912071Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (16.38s)
```
### 2025-07-06
#### FAIL 30 seconds
```
2025-07-06T00:48:43.0092672Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-06T00:48:43.0093304Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-07-06T00:48:43.0098340Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-06T00:48:43.0109987Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-06T00:48:43.0110542Z     resource_test.go:172: Step 1/3 error: Error running apply: exit status 1
2025-07-06T00:48:43.0110889Z         
2025-07-06T00:48:43.0111152Z         Error: error creating resource
2025-07-06T00:48:43.0111412Z         
2025-07-06T00:48:43.0111733Z           with mongodbatlas_stream_instance.instance,
2025-07-06T00:48:43.0112492Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-07-06T00:48:43.0113095Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-07-06T00:48:43.0113401Z         
2025-07-06T00:48:43.0113881Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams
2025-07-06T00:48:43.0114535Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0115108Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0115484Z         BadRequestDetail: 
2025-07-06T00:48:43.0126367Z   
2025-07-06T00:48:43.0201567Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (30.99s)
```
### 2025-07-07
#### PASS 12 seconds
```
2025-07-07T00:48:05.7825595Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-07T00:48:05.7826390Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-07-07T00:48:05.7832068Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-07T00:48:05.7837608Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (12.52s)
```
### 2025-07-08
#### PASS 13 seconds
```
2025-07-08T00:45:56.1189607Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-08T00:45:56.1190838Z     resource_test.go:171: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-07-08T00:45:56.1199670Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-07-08T00:45:56.1208477Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (13.75s)
```