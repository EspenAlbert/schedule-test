# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 4.09s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 7 seconds
- 2026-01-27 PASS 14 seconds
- 2026-01-28 PASS 9 seconds
- 2026-01-29 PASS 10 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 10 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 8 seconds
- 2026-02-03
  - PASS 19 seconds
  - PASS 19 seconds
- 2026-02-04 PASS 11 seconds
- 2026-02-05 PASS 11 seconds
- 2026-02-06 PASS 10 seconds
- 2026-02-07
  - PASS 19 seconds
  - PASS 12 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 9 seconds
- 2026-02-10 PASS 13 seconds
- 2026-02-11 PASS 11 seconds
- 2026-02-12
  - PASS 12 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6379449Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-02-12T18:47:25.6380535Z     resource_stream_connection_test.go:99: Creating execution project (1): test-acc-tf-p-4667970271334491023
2026-02-12T18:47:25.6381654Z     resource_stream_connection_test.go:99: 
2026-02-12T18:47:25.6383179Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6386098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6389192Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6392136Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:25.6395499Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:106
2026-02-12T18:47:25.6399189Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:99
2026-02-12T18:47:25.6400594Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6405159Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6407649Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-02-12T18:47:25.6411509Z         	Messages:   	Project creation failed: test-acc-tf-p-4667970271334491023, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6414081Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (0.23s)
```

- 2026-02-13 PASS 11 seconds
- 2026-02-14 PASS 12 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 11 seconds
- 2026-02-17 PASS 12 seconds
- 2026-02-18 PASS 10 seconds
- 2026-02-19 PASS 12 seconds
- 2026-02-20 PASS 13 seconds
- 2026-02-21 PASS 14 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 12 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.1999824Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-02-24T01:09:13.2001123Z     resource_stream_connection_test.go:99: Creating execution project (1): test-acc-tf-p-7083255240452688805
2026-02-24T01:09:13.2002807Z     resource_stream_connection_test.go:99: Creating execution stream instance: test-acc-tf-s-9143864225822660744
2026-02-24T01:09:13.2035004Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-02-24T01:09:13.2090619Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-02-24T01:09:13.2091249Z     resource_stream_connection_test.go:100: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:09:13.2092055Z         
2026-02-24T01:09:13.2092363Z         Error: error creating resource
2026-02-24T01:09:13.2092648Z         
2026-02-24T01:09:13.2093328Z           with mongodbatlas_stream_connection.test,
2026-02-24T01:09:13.2094768Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-02-24T01:09:13.2095535Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-02-24T01:09:13.2095885Z         
2026-02-24T01:09:13.2096376Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2096800Z         type
2026-02-24T01:09:13.2151091Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (4.88s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 9 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 12 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 11 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 9 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 9 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 12 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
