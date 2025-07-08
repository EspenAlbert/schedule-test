# stream/streaminstance/TestAccStreamDSStreamInstances_withPageConfig Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
### 2025-07-01
#### PASS 2 seconds
#### PASS 2 seconds
### 2025-07-02
#### PASS 2 seconds
### 2025-07-03
#### PASS 2 seconds
### 2025-07-04
#### PASS 2 seconds
### 2025-07-05
#### PASS 2 seconds
### 2025-07-06
#### FAIL 30 seconds
```
2025-07-06T00:48:43.0018854Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-07-06T00:48:43.0022622Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-07-06T00:48:43.0035644Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-07-06T00:48:43.0036234Z     data_source_stream_instances_test.go:50: Step 1/1 error: Error running apply: exit status 1
2025-07-06T00:48:43.0036647Z         
2025-07-06T00:48:43.0036918Z         Error: error creating resource
2025-07-06T00:48:43.0037188Z         
2025-07-06T00:48:43.0037740Z           with mongodbatlas_stream_instance.test,
2025-07-06T00:48:43.0038363Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-07-06T00:48:43.0038936Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-07-06T00:48:43.0039243Z         
2025-07-06T00:48:43.0039729Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams
2025-07-06T00:48:43.0040388Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0040959Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0041343Z         BadRequestDetail: 
2025-07-06T00:48:43.0041673Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (30.86s)
```
### 2025-07-07
#### PASS 2 seconds
### 2025-07-08
#### PASS 2 seconds