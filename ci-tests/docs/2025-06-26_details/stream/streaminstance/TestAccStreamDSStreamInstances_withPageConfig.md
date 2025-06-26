# stream/streaminstance/TestAccStreamDSStreamInstances_withPageConfig Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 2 seconds
```
2025-06-20T00:45:53.6843322Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-06-20T00:45:53.6846807Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-06-20T00:45:53.6848908Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.58s)
```
### 2025-06-21
#### PASS 2 seconds
```
2025-06-21T00:43:49.5432589Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-06-21T00:43:49.5439389Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-06-21T00:43:49.5442010Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.59s)
```
### 2025-06-22
#### FAIL 32 seconds
```
2025-06-22T00:49:55.8275094Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-06-22T00:49:55.8279595Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-06-22T00:49:55.8351456Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-06-22T00:49:55.8352548Z     data_source_stream_instances_test.go:50: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8353057Z         
2025-06-22T00:49:55.8353337Z         Error: error during resource delete
2025-06-22T00:49:55.8353601Z         
2025-06-22T00:49:55.8354262Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaaf7a0954e84ae4db/streams/test-acc-tf-8018974745125131532
2025-06-22T00:49:55.8355026Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8355606Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8356001Z         BadRequestDetail: 
2025-06-22T00:49:55.8356332Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (32.58s)
```
### 2025-06-23
#### PASS 3 seconds
```
2025-06-23T00:45:53.8835900Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-06-23T00:45:53.8843252Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-06-23T00:45:53.8846581Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (3.67s)
```
### 2025-06-24
#### PASS 2 seconds
```
2025-06-24T00:45:42.3227847Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-06-24T00:45:42.3231745Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-06-24T00:45:42.3233170Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.38s)
```
### 2025-06-25
#### PASS 2 seconds
```
2025-06-25T00:45:03.6077547Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-06-25T00:45:03.6083611Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-06-25T00:45:03.6087047Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.52s)
```
#### PASS 2 seconds
```
2025-06-25T06:57:33.8288399Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-06-25T06:57:33.8293162Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-06-25T06:57:33.8293957Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.54s)
```
### 2025-06-26
#### PASS 2 seconds
```
2025-06-26T00:44:37.3174973Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-06-26T00:44:37.3179495Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-06-26T00:44:37.3181222Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.38s)
```
#### PASS 2 seconds
```
2025-06-26T04:28:17.6388441Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-06-26T04:28:17.6392280Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-06-26T04:28:17.6394224Z --- PASS: TestAccStreamDSStreamInstances_withPageConfig (2.63s)
```