# stream/streamprocessor/TestMigStreamProcessor_basic Test Details
# Found 23 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 21) FAIL(x 2)
Success rate: 91.30%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-06 00:56](#error-2026-02-06t0056320000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar | dev | 6.08s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
```
2026-02-06T00:56:32.5639617Z === RUN   TestMigStreamProcessor_basic
2026-02-06T00:56:32.5641003Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-3935339712897436282
2026-02-06T00:56:32.5642473Z     resource_migration_test.go:11: Creating execution stream instance: test-acc-tf-s-69697366263959401
2026-02-06T00:56:32.6089252Z === CONT  TestMigStreamProcessor_basic
2026-02-06T00:56:32.6230629Z === NAME  TestMigStreamProcessor_basic
2026-02-06T00:56:32.6231183Z     resource_migration_test.go:11: Step 1/2 error: Error running pre-apply plan: exit status 1
2026-02-06T00:56:32.6231621Z         
2026-02-06T00:56:32.6231897Z         Error: error fetching resource
2026-02-06T00:56:32.6232163Z         
2026-02-06T00:56:32.6232538Z           with data.mongodbatlas_stream_connection.sample,
2026-02-06T00:56:32.6233220Z           on terraform_plugin_test.tf line 27, in data "mongodbatlas_stream_connection" "sample":
2026-02-06T00:56:32.6233880Z           27:             data "mongodbatlas_stream_connection" "sample" {
2026-02-06T00:56:32.6234217Z         
2026-02-06T00:56:32.6235067Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar
2026-02-06T00:56:32.6235998Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-06T00:56:32.6236630Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-06T00:56:32.6237271Z         6985378713125e9acd98a203 and name test-acc-tf-s-69697366263959401 not found.
2026-02-06T00:56:32.6237911Z         Reason: Not Found. Params: [sample_stream_solar 6985378713125e9acd98a203
2026-02-06T00:56:32.6238453Z         test-acc-tf-s-69697366263959401], BadRequestDetail: 
2026-02-06T00:56:32.6238831Z --- FAIL: TestMigStreamProcessor_basic (6.79s)
```

- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 11 seconds
- 2026-02-10: MISSING
- 2026-02-11 PASS 13 seconds
- 2026-02-12

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.7698891Z === RUN   TestMigStreamProcessor_basic
2026-02-12T18:47:26.7700186Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-3228951694212729139
2026-02-12T18:47:26.7701189Z     resource_migration_test.go:11: 
2026-02-12T18:47:26.7702984Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.7707826Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.7718192Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.7721374Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.7724706Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:119
2026-02-12T18:47:26.7728399Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_migration_test.go:11
2026-02-12T18:47:26.7729838Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.7734759Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.7737114Z         	Test:       	TestMigStreamProcessor_basic
2026-02-12T18:47:26.7741819Z         	Messages:   	Project creation failed: test-acc-tf-p-3228951694212729139, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.7744409Z --- FAIL: TestMigStreamProcessor_basic (0.44s)
```

- 2026-02-13 PASS 12 seconds
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS 10 seconds
- 2026-02-17: MISSING
- 2026-02-18 PASS 11 seconds
- 2026-02-19: MISSING
- 2026-02-20 PASS 11 seconds
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS 12 seconds
- 2026-02-24: MISSING
- 2026-02-25
  - PASS 13 seconds
  - PASS 9 seconds
- 2026-02-26: MISSING
- 2026-02-27
  - PASS 11 seconds
  - PASS 15 seconds
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02 PASS 13 seconds
- 2026-03-03: MISSING
- 2026-03-04 PASS 10 seconds
- 2026-03-05: MISSING
- 2026-03-06 PASS 13 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 13 seconds
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
- 2026-02-15 PASS 10 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 10 seconds
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
- 2026-03-01 PASS 8 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 11 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
