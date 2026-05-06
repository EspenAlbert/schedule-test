# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaOAuthBearer Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:36](#error-2026-04-09t0136130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.06s
[2026-04-22 02:26](#error-2026-04-22t0226570000) |  | dev | timeout | 1202.08s
[2026-04-30 01:31](#error-2026-04-30t0131460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 10 seconds
- 2026-04-08 PASS 12 seconds
- 2026-04-09

### Error 2026-04-09T01:36:13+00:00
```
2026-04-09T01:36:13.0049732Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-04-09T01:36:13.0051217Z     resource_stream_connection_test.go:183: Creating execution project (1): test-acc-tf-p-3846343556009231302
2026-04-09T01:36:13.0052306Z     resource_stream_connection_test.go:183: 
2026-04-09T01:36:13.0054031Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:36:13.0057327Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:36:13.0060838Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:36:13.0064182Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-09T01:36:13.0067994Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:183
2026-04-09T01:36:13.0070532Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T01:36:13.0071463Z         	Error:      	Received unexpected error:
2026-04-09T01:36:13.0075034Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:36:13.0077007Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-04-09T01:36:13.0080444Z         	Messages:   	Project creation failed: test-acc-tf-p-3846343556009231302, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:36:13.0082663Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (73.60s)
```

- 2026-04-10 PASS 15 seconds
- 2026-04-11 PASS 11 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 12 seconds
- 2026-04-14 PASS 10 seconds
- 2026-04-15 PASS 13 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 11 seconds
- 2026-04-18 PASS 59 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 12 seconds
- 2026-04-21 PASS 11 seconds
- 2026-04-22

### Error 2026-04-22T02:26:57+00:00
```
2026-04-22T02:26:57.1678901Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-04-22T02:26:57.1700476Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-04-22T02:26:57.1735657Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-04-22T02:26:57.1736316Z     resource_stream_connection_test.go:217: Step 1/3 error: Error running apply: exit status 1
2026-04-22T02:26:57.1736800Z         
2026-04-22T02:26:57.1737205Z         Error: error waiting for stream connection to be ready
2026-04-22T02:26:57.1737564Z         
2026-04-22T02:26:57.1737937Z           with mongodbatlas_stream_connection.test,
2026-04-22T02:26:57.1738654Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-04-22T02:26:57.1739633Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-04-22T02:26:57.1740122Z         
2026-04-22T02:26:57.1740602Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-04-22T02:26:57.1741089Z         'NOT_FOUND', timeout: 20m0s)
2026-04-22T02:26:57.1741517Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1202.76s)
```

- 2026-04-23 PASS 11 seconds
- 2026-04-24 PASS 13 seconds
- 2026-04-25 PASS 23 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 12 seconds
- 2026-04-28 PASS 12 seconds
- 2026-04-29 PASS 15 seconds
- 2026-04-30
  - FAIL a minute

### Error 2026-04-30T01:31:46+00:00
```
2026-04-30T01:31:46.2626611Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-04-30T01:31:46.2627320Z     resource_stream_connection_test.go:183: Creating execution project (1): test-acc-tf-p-7343826285235086957
2026-04-30T01:31:46.2627917Z     resource_stream_connection_test.go:183: 
2026-04-30T01:31:46.2628864Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:31:46.2630647Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:31:46.2632794Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:31:46.2634604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-30T01:31:46.2636909Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:183
2026-04-30T01:31:46.2638194Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:31:46.2638718Z         	Error:      	Received unexpected error:
2026-04-30T01:31:46.2640633Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2642325Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-04-30T01:31:46.2644141Z         	Messages:   	Project creation failed: test-acc-tf-p-7343826285235086957, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2645390Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (73.12s)
```

  - PASS 12 seconds
- 2026-05-01 PASS 12 seconds
- 2026-05-02 PASS 12 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 19 seconds
- 2026-05-05 PASS 11 seconds
- 2026-05-06 PASS 13 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-22 08:06](#error-2026-04-22t0806480000) |  | qa | timeout | 1201.09s
[2026-05-06 07:47](#error-2026-05-06t0747380000) |  | qa | timeout | 1202.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 12 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 14 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 12 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - FAIL 20 minutes

### Error 2026-04-22T08:06:48+00:00
```
2026-04-22T08:06:48.7309566Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-04-22T08:06:48.7325553Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-04-22T08:06:48.7363616Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-04-22T08:06:48.7364271Z     resource_stream_connection_test.go:217: Step 1/3 error: Error running apply: exit status 1
2026-04-22T08:06:48.7364917Z         
2026-04-22T08:06:48.7365314Z         Error: error waiting for stream connection to be ready
2026-04-22T08:06:48.7365673Z         
2026-04-22T08:06:48.7366037Z           with mongodbatlas_stream_connection.test,
2026-04-22T08:06:48.7366735Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-04-22T08:06:48.7367397Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-04-22T08:06:48.7367747Z         
2026-04-22T08:06:48.7368220Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-04-22T08:06:48.7368692Z         'NOT_FOUND', timeout: 20m0s)
2026-04-22T08:06:48.7369128Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1201.90s)
```

  - PASS 12 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 12 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 12 seconds
- 2026-05-04
  - PASS 13 seconds
  - PASS 11 seconds
- 2026-05-05 PASS 11 seconds
- 2026-05-06

### Error 2026-05-06T07:47:38+00:00
```
2026-05-06T07:47:38.5885264Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-06T07:47:38.5938513Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-06T07:47:38.6016364Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-06T07:47:38.6017006Z     resource_stream_connection_test.go:217: Step 1/3 error: Error running apply: exit status 1
2026-05-06T07:47:38.6017461Z         
2026-05-06T07:47:38.6017848Z         Error: error waiting for stream connection to be ready
2026-05-06T07:47:38.6018199Z         
2026-05-06T07:47:38.6018552Z           with mongodbatlas_stream_connection.test,
2026-05-06T07:47:38.6019253Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-05-06T07:47:38.6020046Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-06T07:47:38.6020385Z         
2026-05-06T07:47:38.6020831Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-06T07:47:38.6021294Z         'NOT_FOUND', timeout: 20m0s)
2026-05-06T07:47:38.6021701Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1202.53s)
```

