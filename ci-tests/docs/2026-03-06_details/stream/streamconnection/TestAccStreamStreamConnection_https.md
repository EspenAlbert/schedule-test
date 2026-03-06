# stream/streamconnection/TestAccStreamStreamConnection_https Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 3)
Success rate: 91.89%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-19 01:27](#error-2026-02-19t0127020000) |  | dev |  | 5.01s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 4.01s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 9 seconds
- 2026-02-06 PASS 11 seconds
- 2026-02-07
  - PASS 11 seconds
  - PASS 9 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 12 seconds
- 2026-02-10 PASS 9 seconds
- 2026-02-11 PASS 14 seconds
- 2026-02-12
  - PASS 9 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6583450Z === RUN   TestAccStreamStreamConnection_https
2026-02-12T18:47:25.6584492Z     resource_stream_connection_test.go:382: Creating execution project (1): test-acc-tf-p-7571080285072881090
2026-02-12T18:47:25.6585434Z     resource_stream_connection_test.go:382: 
2026-02-12T18:47:25.6586947Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6590014Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6592942Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6595876Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:25.6599373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:382
2026-02-12T18:47:25.6601438Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:25.6602250Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6606800Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6609663Z         	Test:       	TestAccStreamStreamConnection_https
2026-02-12T18:47:25.6613617Z         	Messages:   	Project creation failed: test-acc-tf-p-7571080285072881090, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6616114Z --- FAIL: TestAccStreamStreamConnection_https (0.23s)
```

- 2026-02-13 PASS 12 seconds
- 2026-02-14 PASS 10 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 10 seconds
- 2026-02-17 PASS 10 seconds
- 2026-02-18 PASS 10 seconds
- 2026-02-19

### Error 2026-02-19T01:27:02+00:00
```
2026-02-19T01:27:02.5679206Z === RUN   TestAccStreamStreamConnection_https
2026-02-19T01:27:02.5690481Z === CONT  TestAccStreamStreamConnection_https
2026-02-19T01:27:02.5715636Z === NAME  TestAccStreamStreamConnection_https
2026-02-19T01:27:02.5716234Z     resource_stream_connection_test.go:394: Step 2/4 error: Error running apply: exit status 1
2026-02-19T01:27:02.5716702Z         
2026-02-19T01:27:02.5717005Z         Error: error updating resource
2026-02-19T01:27:02.5717285Z         
2026-02-19T01:27:02.5717641Z           with mongodbatlas_stream_connection.test,
2026-02-19T01:27:02.5718350Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-02-19T01:27:02.5719023Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-02-19T01:27:02.5719359Z         
2026-02-19T01:27:02.5720464Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69965bc899696b9761bc3d8b/streams/test-acc-tf-s-7785512461533481447/connections/ConnectionNameHttps
2026-02-19T01:27:02.5721261Z         PATCH: HTTP 404 Not Found (Error code:
2026-02-19T01:27:02.5721833Z         "STREAM_CONNECTION_NOT_FOUND_FOR_NAME") Detail: Stream connection with name
2026-02-19T01:27:02.5722481Z         ConnectionNameHttps for project 69965bc899696b9761bc3d8b and name
2026-02-19T01:27:02.5723128Z         test-acc-tf-s-7785512461533481447 not found. Reason: Not Found. Params:
2026-02-19T01:27:02.5723666Z         [ConnectionNameHttps 69965bc899696b9761bc3d8b
2026-02-19T01:27:02.5724154Z         test-acc-tf-s-7785512461533481447], BadRequestDetail: 
2026-02-19T01:27:02.5725032Z --- FAIL: TestAccStreamStreamConnection_https (5.15s)
```

- 2026-02-20 PASS 12 seconds
- 2026-02-21 PASS 11 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 13 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2028192Z === RUN   TestAccStreamStreamConnection_https
2026-02-24T01:09:13.2039144Z === CONT  TestAccStreamStreamConnection_https
2026-02-24T01:09:13.2176289Z === NAME  TestAccStreamStreamConnection_https
2026-02-24T01:09:13.2176902Z     resource_stream_connection_test.go:394: Step 2/4 error: Error running apply: exit status 1
2026-02-24T01:09:13.2177354Z         
2026-02-24T01:09:13.2177636Z         Error: error updating resource
2026-02-24T01:09:13.2177919Z         
2026-02-24T01:09:13.2178264Z           with mongodbatlas_stream_connection.test,
2026-02-24T01:09:13.2178968Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-02-24T01:09:13.2179615Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-02-24T01:09:13.2179953Z         
2026-02-24T01:09:13.2180418Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2180833Z         type
2026-02-24T01:09:13.2189968Z    test_working_directory=/tmp/plugintest1496798525 test_step_number=2 test_name=TestAccStreamRSStreamConnection_kafkaSSL test_terraform_path=/home/runner/work/_temp/aaedc82b-f5f9-4ae8-bb98-eec7ab7049ef/terraform
2026-02-24T01:09:13.2196971Z --- FAIL: TestAccStreamStreamConnection_https (4.13s)
```

- 2026-02-25
  - PASS 13 seconds
  - PASS 11 seconds
- 2026-02-26 PASS 12 seconds
- 2026-02-27
  - PASS 11 seconds
  - PASS 13 seconds
- 2026-02-28 PASS 11 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 14 seconds
- 2026-03-03 PASS 12 seconds
- 2026-03-04 PASS 11 seconds
- 2026-03-05 PASS 12 seconds
- 2026-03-06 PASS 14 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 12 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 12 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 10 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 9 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 12 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 10 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 10 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
