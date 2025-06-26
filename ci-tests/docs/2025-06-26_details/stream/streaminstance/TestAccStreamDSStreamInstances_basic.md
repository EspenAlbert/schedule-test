# stream/streaminstance/TestAccStreamDSStreamInstances_basic Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 2 seconds
```
2025-06-20T00:45:53.6842650Z === RUN   TestAccStreamDSStreamInstances_basic
2025-06-20T00:45:53.6847150Z === CONT  TestAccStreamDSStreamInstances_basic
2025-06-20T00:45:53.6848496Z --- PASS: TestAccStreamDSStreamInstances_basic (2.50s)
```
### 2025-06-21
#### PASS 2 seconds
```
2025-06-21T00:43:49.5431349Z === RUN   TestAccStreamDSStreamInstances_basic
2025-06-21T00:43:49.5441314Z === CONT  TestAccStreamDSStreamInstances_basic
2025-06-21T00:43:49.5442765Z --- PASS: TestAccStreamDSStreamInstances_basic (2.61s)
```
### 2025-06-22
#### FAIL 31 seconds
```
2025-06-22T00:49:55.8274414Z === RUN   TestAccStreamDSStreamInstances_basic
2025-06-22T00:49:55.8280260Z === CONT  TestAccStreamDSStreamInstances_basic
2025-06-22T00:49:55.8309098Z === NAME  TestAccStreamDSStreamInstances_basic
2025-06-22T00:49:55.8309787Z     data_source_stream_instances_test.go:26: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:49:55.8310299Z         
2025-06-22T00:49:55.8310580Z         Error: error creating resource
2025-06-22T00:49:55.8310855Z         
2025-06-22T00:49:55.8311409Z           with mongodbatlas_stream_instance.test,
2025-06-22T00:49:55.8316716Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-06-22T00:49:55.8317666Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-06-22T00:49:55.8317993Z         
2025-06-22T00:49:55.8318646Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaaf7a0954e84ae4db/streams
2025-06-22T00:49:55.8319420Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8320125Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8320553Z         BadRequestDetail: 
2025-06-22T00:49:55.8325886Z --- FAIL: TestAccStreamDSStreamInstances_basic (31.00s)
```
### 2025-06-23
#### PASS 3 seconds
```
2025-06-23T00:45:53.8834545Z === RUN   TestAccStreamDSStreamInstances_basic
2025-06-23T00:45:53.8843882Z === CONT  TestAccStreamDSStreamInstances_basic
2025-06-23T00:45:53.8844481Z --- PASS: TestAccStreamDSStreamInstances_basic (3.61s)
```
### 2025-06-24
#### PASS 2 seconds
```
2025-06-24T00:45:42.3227167Z === RUN   TestAccStreamDSStreamInstances_basic
2025-06-24T00:45:42.3232464Z === CONT  TestAccStreamDSStreamInstances_basic
2025-06-24T00:45:42.3233581Z --- PASS: TestAccStreamDSStreamInstances_basic (2.38s)
```
### 2025-06-25
#### PASS 2 seconds
```
2025-06-25T00:45:03.6076385Z === RUN   TestAccStreamDSStreamInstances_basic
2025-06-25T00:45:03.6084841Z === CONT  TestAccStreamDSStreamInstances_basic
2025-06-25T00:45:03.6086340Z --- PASS: TestAccStreamDSStreamInstances_basic (2.50s)
```
#### PASS 2 seconds
```
2025-06-25T06:57:33.8287652Z === RUN   TestAccStreamDSStreamInstances_basic
2025-06-25T06:57:33.8293540Z === CONT  TestAccStreamDSStreamInstances_basic
2025-06-25T06:57:33.8294403Z --- PASS: TestAccStreamDSStreamInstances_basic (2.61s)
```
### 2025-06-26
#### PASS 2 seconds
```
2025-06-26T00:44:37.3174237Z === RUN   TestAccStreamDSStreamInstances_basic
2025-06-26T00:44:37.3179889Z === CONT  TestAccStreamDSStreamInstances_basic
2025-06-26T00:44:37.3180622Z --- PASS: TestAccStreamDSStreamInstances_basic (2.38s)
```
#### PASS 2 seconds
```
2025-06-26T04:28:17.6387746Z === RUN   TestAccStreamDSStreamInstances_basic
2025-06-26T04:28:17.6393008Z === CONT  TestAccStreamDSStreamInstances_basic
2025-06-26T04:28:17.6393809Z --- PASS: TestAccStreamDSStreamInstances_basic (2.57s)
```