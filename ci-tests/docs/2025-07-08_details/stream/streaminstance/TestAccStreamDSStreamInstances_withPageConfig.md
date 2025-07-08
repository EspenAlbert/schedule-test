# stream/streaminstance/TestAccStreamDSStreamInstances_withPageConfig Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## Timeline
### 2025-07-01
#### PASS 3 seconds
```
2025-07-01T08:50:28.2713413Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-07-01T08:50:28.2719947Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-07-01T08:50:28.2724278Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (3.49s)
```
#### PASS 2 seconds
```
2025-07-01T12:50:20.6062663Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-07-01T12:50:20.6066803Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-07-01T12:50:20.6068193Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.47s)
```
#### PASS 2 seconds
```
2025-07-01T17:50:24.3464892Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-07-01T17:50:24.3471093Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-07-01T17:50:24.3473953Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.51s)
```
### 2025-07-02
#### PASS 2 seconds
```
2025-07-02T00:46:31.9189741Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-07-02T00:46:31.9197431Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-07-02T00:46:31.9198742Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.28s)
```
### 2025-07-03
#### PASS 2 seconds
```
2025-07-03T00:46:39.9530757Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-07-03T00:46:39.9535604Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-07-03T00:46:39.9536024Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.46s)
```
### 2025-07-04
#### PASS 2 seconds
```
2025-07-04T00:45:55.5459148Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-07-04T00:45:55.5462842Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-07-04T00:45:55.5464397Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.21s)
```
### 2025-07-05
#### PASS 2 seconds
```
2025-07-05T00:44:07.5851145Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-07-05T00:44:07.5858043Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-07-05T00:44:07.5860539Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.83s)
```
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
```
2025-07-07T00:48:05.7800926Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-07-07T00:48:05.7804460Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-07-07T00:48:05.7806518Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.39s)
```
### 2025-07-08
#### PASS 2 seconds
```
2025-07-08T00:45:56.1146862Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-07-08T00:45:56.1152874Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-07-08T00:45:56.1155499Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.33s)
```