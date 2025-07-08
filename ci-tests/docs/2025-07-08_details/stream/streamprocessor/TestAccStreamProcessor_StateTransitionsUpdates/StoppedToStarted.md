# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
### 2025-07-01
#### PASS 13 seconds
#### PASS 15 seconds
### 2025-07-02
#### PASS 12 seconds
### 2025-07-03
#### PASS 13 seconds
### 2025-07-04
#### PASS 12 seconds
### 2025-07-05
#### PASS 16 seconds
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
### 2025-07-08
#### PASS 13 seconds