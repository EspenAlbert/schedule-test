# stream/streamconnection/TestAccStreamRSStreamConnection_AWSLambda Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 6 seconds
```
2025-06-20T00:45:53.6824901Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-06-20T00:45:53.6828788Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-06-20T00:45:53.6836477Z --- PASS: TestAccStreamRSStreamConnection_AWSLambda (6.21s)
```
### 2025-06-21
#### PASS 6 seconds
```
2025-06-21T00:43:49.5380572Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-06-21T00:43:49.5387729Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-06-21T00:43:49.5418018Z --- PASS: TestAccStreamRSStreamConnection_AWSLambda (6.11s)
```
### 2025-06-22
#### FAIL a minute
```
2025-06-22T00:49:55.7955770Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-06-22T00:49:55.7957874Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-06-22T00:49:55.8100726Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-06-22T00:49:55.8101298Z     resource_stream_connection_test.go:296: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:49:55.8101708Z         
2025-06-22T00:49:55.8102135Z         Error: error creating resource
2025-06-22T00:49:55.8102410Z         
2025-06-22T00:49:55.8102737Z           with mongodbatlas_stream_connection.test,
2025-06-22T00:49:55.8103375Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "test":
2025-06-22T00:49:55.8103971Z           23: 		resource "mongodbatlas_stream_connection" "test" {
2025-06-22T00:49:55.8104396Z         
2025-06-22T00:49:55.8105133Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67978809c57f200e59f19f6a/streams/test-acc-tf-8657360613357518085/connections
2025-06-22T00:49:55.8105967Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8106539Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8106923Z         BadRequestDetail: 
2025-06-22T00:49:55.8225837Z === NAME  TestAccStreamRSStreamConnection_AWSLambda
2025-06-22T00:49:55.8226419Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8226835Z         
2025-06-22T00:49:55.8227117Z         Error: error during resource delete
2025-06-22T00:49:55.8227385Z         
2025-06-22T00:49:55.8228046Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67978809c57f200e59f19f6a/streams/test-acc-tf-8657360613357518085
2025-06-22T00:49:55.8228800Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8229379Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8229781Z         BadRequestDetail: 
2025-06-22T00:49:55.8230100Z --- FAIL: TestAccStreamRSStreamConnection_AWSLambda (62.62s)
```
### 2025-06-23
#### PASS 6 seconds
```
2025-06-23T00:45:53.8807915Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-06-23T00:45:53.8811671Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-06-23T00:45:53.8820148Z --- PASS: TestAccStreamRSStreamConnection_AWSLambda (6.89s)
```
### 2025-06-24
#### PASS 6 seconds
```
2025-06-24T00:45:42.3212044Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-06-24T00:45:42.3214945Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-06-24T00:45:42.3221612Z --- PASS: TestAccStreamRSStreamConnection_AWSLambda (6.42s)
```
### 2025-06-25
#### PASS 6 seconds
```
2025-06-25T00:45:03.6050119Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-06-25T00:45:03.6056061Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-06-25T00:45:03.6066649Z --- PASS: TestAccStreamRSStreamConnection_AWSLambda (6.47s)
```
#### PASS 6 seconds
```
2025-06-25T06:57:33.8270604Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-06-25T06:57:33.8274175Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-06-25T06:57:33.8281468Z --- PASS: TestAccStreamRSStreamConnection_AWSLambda (6.40s)
```
### 2025-06-26
#### PASS 5 seconds
```
2025-06-26T00:44:37.3157421Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-06-26T00:44:37.3160516Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-06-26T00:44:37.3166751Z --- PASS: TestAccStreamRSStreamConnection_AWSLambda (5.87s)
```
#### PASS 6 seconds
```
2025-06-26T04:28:17.6372107Z === RUN   TestAccStreamRSStreamConnection_AWSLambda
2025-06-26T04:28:17.6377399Z === CONT  TestAccStreamRSStreamConnection_AWSLambda
2025-06-26T04:28:17.6382069Z --- PASS: TestAccStreamRSStreamConnection_AWSLambda (6.33s)
```