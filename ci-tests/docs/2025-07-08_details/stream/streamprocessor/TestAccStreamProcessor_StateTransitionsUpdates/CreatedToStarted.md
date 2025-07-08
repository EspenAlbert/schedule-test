# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
### 2025-07-01
#### PASS 8 seconds
#### PASS 9 seconds
### 2025-07-02
#### PASS 8 seconds
### 2025-07-03
#### PASS 9 seconds
### 2025-07-04
#### PASS 8 seconds
### 2025-07-05
#### PASS 10 seconds
### 2025-07-06
#### FAIL 31 seconds
```
2025-07-06T00:48:43.0087288Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-06T00:48:43.0088044Z     resource_test.go:171: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-07-06T00:48:43.0098817Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-06T00:48:43.0109635Z    test_step_number=1
2025-07-06T00:48:43.0126677Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-07-06T00:48:43.0127238Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0127699Z         
2025-07-06T00:48:43.0127962Z         Error: error creating resource
2025-07-06T00:48:43.0128224Z         
2025-07-06T00:48:43.0128547Z           with mongodbatlas_stream_instance.instance,
2025-07-06T00:48:43.0129187Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-07-06T00:48:43.0129780Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-07-06T00:48:43.0130094Z         
2025-07-06T00:48:43.0130574Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams
2025-07-06T00:48:43.0131231Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0131802Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0132176Z         BadRequestDetail: 
2025-07-06T00:48:43.0143164Z   
2025-07-06T00:48:43.0202204Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (31.00s)
```
### 2025-07-07
#### PASS 8 seconds
### 2025-07-08
#### PASS 9 seconds