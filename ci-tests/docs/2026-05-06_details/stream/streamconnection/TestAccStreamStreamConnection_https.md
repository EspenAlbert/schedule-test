# stream/streamconnection/TestAccStreamStreamConnection_https Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-30 01:31](#error-2026-04-30t0131460000) |  | dev | 6.03s
[2026-05-04 01:38](#error-2026-05-04t0138530000) |  | dev | 8.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 11 seconds
- 2026-04-08 PASS 14 seconds
- 2026-04-09 PASS 10 seconds
- 2026-04-10 PASS 15 seconds
- 2026-04-11 PASS 12 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 13 seconds
- 2026-04-14 PASS 11 seconds
- 2026-04-15 PASS 13 seconds
- 2026-04-16 PASS 12 seconds
- 2026-04-17 PASS 14 seconds
- 2026-04-18 PASS 13 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 12 seconds
- 2026-04-21 PASS 11 seconds
- 2026-04-22 PASS 12 seconds
- 2026-04-23 PASS 11 seconds
- 2026-04-24 PASS 14 seconds
- 2026-04-25 PASS 12 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 14 seconds
- 2026-04-28 PASS 13 seconds
- 2026-04-29 PASS 17 seconds
- 2026-04-30
  - FAIL 6 seconds

### Error 2026-04-30T01:31:46+00:00
```
2026-04-30T01:31:46.2679700Z === RUN   TestAccStreamStreamConnection_https
2026-04-30T01:31:46.2692828Z === CONT  TestAccStreamStreamConnection_https
2026-04-30T01:31:46.2720988Z === NAME  TestAccStreamStreamConnection_https
2026-04-30T01:31:46.2721815Z     resource_stream_connection_test.go:395: Step 2/4 error: Error running apply: exit status 1
2026-04-30T01:31:46.2722290Z         
2026-04-30T01:31:46.2722596Z         Error: error updating resource
2026-04-30T01:31:46.2722889Z         
2026-04-30T01:31:46.2723247Z           with mongodbatlas_stream_connection.test,
2026-04-30T01:31:46.2723964Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-04-30T01:31:46.2724633Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-04-30T01:31:46.2724983Z         
2026-04-30T01:31:46.2725876Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f2a959cdf8fd46bf1ad19e/streams/test-acc-tf-s-1749295188031826598/connections/ConnectionNameHttps
2026-04-30T01:31:46.2726673Z         PATCH: HTTP 404 Not Found (Error code:
2026-04-30T01:31:46.2727250Z         "STREAM_CONNECTION_NOT_FOUND_FOR_NAME") Detail: Stream connection with name
2026-04-30T01:31:46.2727897Z         ConnectionNameHttps for project 69f2a959cdf8fd46bf1ad19e and name
2026-04-30T01:31:46.2728551Z         test-acc-tf-s-1749295188031826598 not found. Reason: Not Found. Params:
2026-04-30T01:31:46.2729242Z         [ConnectionNameHttps 69f2a959cdf8fd46bf1ad19e
2026-04-30T01:31:46.2729754Z         test-acc-tf-s-1749295188031826598], BadRequestDetail: 
2026-04-30T01:31:46.2730638Z --- FAIL: TestAccStreamStreamConnection_https (6.31s)
```

  - PASS 13 seconds
- 2026-05-01 PASS 13 seconds
- 2026-05-02 PASS 13 seconds
- 2026-05-03: MISSING
- 2026-05-04

### Error 2026-05-04T01:38:53+00:00
```
2026-05-04T01:38:53.4227303Z === RUN   TestAccStreamStreamConnection_https
2026-05-04T01:38:53.4240656Z === CONT  TestAccStreamStreamConnection_https
2026-05-04T01:38:53.4270040Z === NAME  TestAccStreamStreamConnection_https
2026-05-04T01:38:53.4270646Z     resource_stream_connection_test.go:395: Step 2/4 error: Error running apply: exit status 1
2026-05-04T01:38:53.4271107Z         
2026-05-04T01:38:53.4271407Z         Error: error updating resource
2026-05-04T01:38:53.4271704Z         
2026-05-04T01:38:53.4272076Z           with mongodbatlas_stream_connection.test,
2026-05-04T01:38:53.4272905Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-05-04T01:38:53.4273830Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-04T01:38:53.4274188Z         
2026-05-04T01:38:53.4275083Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f7ee6dc8db7e025f537ba1/streams/test-acc-tf-s-3317042575857146535/connections/ConnectionNameHttps
2026-05-04T01:38:53.4275885Z         PATCH: HTTP 404 Not Found (Error code:
2026-05-04T01:38:53.4276459Z         "STREAM_CONNECTION_NOT_FOUND_FOR_NAME") Detail: Stream connection with name
2026-05-04T01:38:53.4277113Z         ConnectionNameHttps for project 69f7ee6dc8db7e025f537ba1 and name
2026-05-04T01:38:53.4277772Z         test-acc-tf-s-3317042575857146535 not found. Reason: Not Found. Params:
2026-05-04T01:38:53.4278329Z         [ConnectionNameHttps 69f7ee6dc8db7e025f537ba1
2026-05-04T01:38:53.4278831Z         test-acc-tf-s-3317042575857146535], BadRequestDetail: 
2026-05-04T01:38:53.4280216Z --- FAIL: TestAccStreamStreamConnection_https (8.42s)
```

- 2026-05-05 PASS 12 seconds
- 2026-05-06 PASS 14 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-04 17:36](#error-2026-05-04t1736300000) |  | qa | 8.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 12 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 22 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 13 seconds
  - PASS 13 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 14 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 13 seconds
- 2026-05-04
  - FAIL 8 seconds

### Error 2026-05-04T17:36:30+00:00
```
2026-05-04T17:36:30.4680751Z === RUN   TestAccStreamStreamConnection_https
2026-05-04T17:36:30.4711534Z === CONT  TestAccStreamStreamConnection_https
2026-05-04T17:36:30.4770119Z === NAME  TestAccStreamStreamConnection_https
2026-05-04T17:36:30.4771395Z     resource_stream_connection_test.go:395: Step 2/4 error: Error running apply: exit status 1
2026-05-04T17:36:30.4772618Z         
2026-05-04T17:36:30.4773143Z         Error: error updating resource
2026-05-04T17:36:30.4773653Z         
2026-05-04T17:36:30.4774311Z           with mongodbatlas_stream_connection.test,
2026-05-04T17:36:30.4775712Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-05-04T17:36:30.4777023Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-04T17:36:30.4777687Z         
2026-05-04T17:36:30.4779388Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f8cb3f90e7e75f3bb7a3c4/streams/test-acc-tf-s-2555972412982673796/connections/ConnectionNameHttps
2026-05-04T17:36:30.4781094Z         PATCH: HTTP 404 Not Found (Error code:
2026-05-04T17:36:30.4782205Z         "STREAM_CONNECTION_NOT_FOUND_FOR_NAME") Detail: Stream connection with name
2026-05-04T17:36:30.4783399Z         ConnectionNameHttps for project 69f8cb3f90e7e75f3bb7a3c4 and name
2026-05-04T17:36:30.4784599Z         test-acc-tf-s-2555972412982673796 not found. Reason: Not Found. Params:
2026-05-04T17:36:30.4785575Z         [ConnectionNameHttps 69f8cb3f90e7e75f3bb7a3c4
2026-05-04T17:36:30.4786494Z         test-acc-tf-s-2555972412982673796], BadRequestDetail: 
2026-05-04T17:36:30.4788103Z --- FAIL: TestAccStreamStreamConnection_https (8.00s)
```

  - PASS 13 seconds
- 2026-05-05 PASS 12 seconds
- 2026-05-06 PASS 13 seconds
