# stream/streaminstance/TestAccStreamRSStreamInstance_withStreamConfig Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## Timeline
### 2025-07-01
#### PASS 3 seconds
```
2025-07-01T08:50:28.2717310Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-07-01T08:50:28.2720636Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-01T08:50:28.2722636Z --- PASS: TestAccStreamRSStreamInstance_withStreamConfig (3.44s)
```
#### PASS 2 seconds
```
2025-07-01T12:50:20.6064763Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-07-01T12:50:20.6066136Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-01T12:50:20.6069032Z --- PASS: TestAccStreamRSStreamInstance_withStreamConfig (2.70s)
```
#### PASS 2 seconds
```
2025-07-01T17:50:24.3468636Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-07-01T17:50:24.3472654Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-01T17:50:24.3475396Z --- PASS: TestAccStreamRSStreamInstance_withStreamConfig (2.79s)
```
### 2025-07-02
#### PASS 2 seconds
```
2025-07-02T00:46:31.9193657Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-07-02T00:46:31.9196178Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-02T00:46:31.9200210Z --- PASS: TestAccStreamRSStreamInstance_withStreamConfig (2.55s)
```
### 2025-07-03
#### PASS 2 seconds
```
2025-07-03T00:46:39.9532972Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-07-03T00:46:39.9534697Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-03T00:46:39.9537217Z --- PASS: TestAccStreamRSStreamInstance_withStreamConfig (2.78s)
```
### 2025-07-04
#### PASS 2 seconds
```
2025-07-04T00:45:55.5461397Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-07-04T00:45:55.5463291Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-04T00:45:55.5466142Z --- PASS: TestAccStreamRSStreamInstance_withStreamConfig (2.64s)
```
### 2025-07-05
#### PASS 2 seconds
```
2025-07-05T00:44:07.5854806Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-07-05T00:44:07.5857395Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-05T00:44:07.5861980Z --- PASS: TestAccStreamRSStreamInstance_withStreamConfig (2.89s)
```
### 2025-07-06
#### FAIL 32 seconds
```
2025-07-06T00:48:43.0020868Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-07-06T00:48:43.0022249Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-06T00:48:43.0051981Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-06T00:48:43.0052671Z     resource_stream_instance_test.go:47: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:48:43.0053158Z         
2025-07-06T00:48:43.0053435Z         Error: error during resource delete
2025-07-06T00:48:43.0053701Z         
2025-07-06T00:48:43.0054359Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams/test-acc-tf-5637826643844833644
2025-07-06T00:48:43.0055238Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-06T00:48:43.0055818Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0056222Z         BadRequestDetail: 
2025-07-06T00:48:43.0056591Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (32.35s)
```
### 2025-07-07
#### PASS 2 seconds
```
2025-07-07T00:48:05.7802960Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-07-07T00:48:05.7805156Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-07T00:48:05.7807681Z --- PASS: TestAccStreamRSStreamInstance_withStreamConfig (2.57s)
```
### 2025-07-08
#### PASS 2 seconds
```
2025-07-08T00:45:56.1150321Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-07-08T00:45:56.1153523Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-08T00:45:56.1158320Z --- PASS: TestAccStreamRSStreamInstance_withStreamConfig (2.56s)
```