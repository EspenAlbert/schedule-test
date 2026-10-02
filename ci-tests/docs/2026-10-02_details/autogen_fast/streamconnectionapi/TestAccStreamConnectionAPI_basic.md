# autogen_fast/streamconnectionapi/TestAccStreamConnectionAPI_basic Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-15 00:49](#error-2026-09-15t0049550000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa89526f45e19b0d3de9fdb/streams/test-acc-tf-s-4194248122232618396/connections | dev |  | 3.03s
[2026-09-16 00:49](#error-2026-09-16t0049530000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa9e6c0013d831ec44d3909/streams/test-acc-tf-s-7399847042951198854/connections | dev |  | 3.04s
[2026-09-17 00:47](#error-2026-09-17t0047210000) | API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections | dev | real_test_failure | 4.00s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 26 seconds
- 2026-09-03 PASS 26 seconds
- 2026-09-04
  - PASS 27 seconds
  - PASS 26 seconds
- 2026-09-05 PASS 25 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 24 seconds
- 2026-09-08 PASS 24 seconds
- 2026-09-09 PASS 25 seconds
- 2026-09-10 PASS 26 seconds
- 2026-09-11 PASS 27 seconds
- 2026-09-12 PASS 25 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 27 seconds
- 2026-09-15

### Error 2026-09-15T00:49:55+00:00
```
2026-09-15T00:49:55.0521475Z === RUN   TestAccStreamConnectionAPI_basic
2026-09-15T00:49:55.0522191Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-2990481829706407230
2026-09-15T00:49:55.0523019Z     resource_test.go:18: Creating execution stream instance: test-acc-tf-s-4194248122232618396
2026-09-15T00:49:55.0524025Z === CONT  TestAccStreamConnectionAPI_basic
2026-09-15T00:49:55.0553423Z    test_name=TestAccStreamConnectionAPI_basic
2026-09-15T00:49:55.0554055Z     resource_test.go:23: Step 1/2 error: Error running apply: exit status 1
2026-09-15T00:49:55.0554557Z         
2026-09-15T00:49:55.0554937Z         Error: Error calling API in Create
2026-09-15T00:49:55.0555304Z         
2026-09-15T00:49:55.0555750Z           with mongodbatlas_stream_connection_api.test,
2026-09-15T00:49:55.0556964Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection_api" "test":
2026-09-15T00:49:55.0557799Z           12: 		resource "mongodbatlas_stream_connection_api" "test" {
2026-09-15T00:49:55.0558433Z         
2026-09-15T00:49:55.0559328Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa89526f45e19b0d3de9fdb/streams/test-acc-tf-s-4194248122232618396/connections
2026-09-15T00:49:55.0560326Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-15T00:49:55.0561093Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-15T00:49:55.0561890Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-15T00:49:55.0562471Z --- FAIL: TestAccStreamConnectionAPI_basic (3.28s)
```

- 2026-09-16

### Error 2026-09-16T00:49:53+00:00
```
2026-09-16T00:49:53.6407111Z === RUN   TestAccStreamConnectionAPI_basic
2026-09-16T00:49:53.6408675Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-5579695521239161030
2026-09-16T00:49:53.6410163Z     resource_test.go:18: Creating execution stream instance: test-acc-tf-s-7399847042951198854
2026-09-16T00:49:53.6411911Z === CONT  TestAccStreamConnectionAPI_basic
2026-09-16T00:49:53.6440228Z   
2026-09-16T00:49:53.6458933Z     resource_test.go:23: Step 1/2 error: Error running apply: exit status 1
2026-09-16T00:49:53.6460119Z         
2026-09-16T00:49:53.6460815Z         Error: Error calling API in Create
2026-09-16T00:49:53.6461480Z         
2026-09-16T00:49:53.6462322Z           with mongodbatlas_stream_connection_api.test,
2026-09-16T00:49:53.6463882Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection_api" "test":
2026-09-16T00:49:53.6465362Z           12: 		resource "mongodbatlas_stream_connection_api" "test" {
2026-09-16T00:49:53.6466170Z         
2026-09-16T00:49:53.6467952Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e6c0013d831ec44d3909/streams/test-acc-tf-s-7399847042951198854/connections
2026-09-16T00:49:53.6469641Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-16T00:49:53.6470989Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-16T00:49:53.6472383Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-16T00:49:53.6473392Z --- FAIL: TestAccStreamConnectionAPI_basic (3.37s)
```

- 2026-09-17

### Error 2026-09-17T00:47:21+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2026-09-17T00:47:21.215000+00:00-TestAccStreamConnectionAPI_basic',confidence=1.0,ts_when='15 days ago')
API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections
```
2026-09-17T00:47:21.2158864Z === RUN   TestAccStreamConnectionAPI_basic
2026-09-17T00:47:21.2159567Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-4830186540066089931
2026-09-17T00:47:21.2160362Z     resource_test.go:18: Creating execution stream instance: test-acc-tf-s-1409810340468629121
2026-09-17T00:47:21.2161312Z === CONT  TestAccStreamConnectionAPI_basic
2026-09-17T00:47:21.2176130Z    test_name=TestAccStreamConnectionAPI_basic test_terraform_path=/home/runner/work/_temp/f920df9b-bc5a-416f-8b18-adfddf2874b7/terraform test_working_directory=/tmp/plugintest2711904220 test_step_number=1
2026-09-17T00:47:21.2177300Z     resource_test.go:23: Step 1/2 error: Error running apply: exit status 1
2026-09-17T00:47:21.2177774Z         
2026-09-17T00:47:21.2178148Z         Error: Error calling API in Create
2026-09-17T00:47:21.2178512Z         
2026-09-17T00:47:21.2178962Z           with mongodbatlas_stream_connection_api.test,
2026-09-17T00:47:21.2179788Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection_api" "test":
2026-09-17T00:47:21.2180571Z           12: 		resource "mongodbatlas_stream_connection_api" "test" {
2026-09-17T00:47:21.2181178Z         
2026-09-17T00:47:21.2182054Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab37d0beed1dea3b838385/streams/test-acc-tf-s-1409810340468629121/connections
2026-09-17T00:47:21.2183008Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-17T00:47:21.2183754Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-17T00:47:21.2184782Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-17T00:47:21.2199638Z --- FAIL: TestAccStreamConnectionAPI_basic (4.04s)
```

- 2026-09-18 PASS 25 seconds
- 2026-09-19 PASS 25 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 26 seconds
- 2026-09-22 PASS 25 seconds
- 2026-09-23
  - PASS 26 seconds
  - PASS 27 seconds
- 2026-09-24 PASS 25 seconds
- 2026-09-25 PASS 28 seconds
- 2026-09-26 PASS 24 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 27 seconds
- 2026-09-29
  - PASS 25 seconds
  - PASS 24 seconds
- 2026-09-30 PASS 26 seconds
- 2026-10-01 PASS 25 seconds
- 2026-10-02 PASS 26 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 25 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 25 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 27 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 26 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 25 seconds
- 2026-09-28: MISSING
- 2026-09-29
  - PASS 27 seconds
  - PASS 27 seconds
  - PASS 27 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
