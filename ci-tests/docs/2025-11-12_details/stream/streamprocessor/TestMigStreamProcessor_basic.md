# stream/streamprocessor/TestMigStreamProcessor_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev |  | 302.06s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f43175353f113dafd152bb/streams | qa | flaky_500 | 32.08s
[2025-10-26 00:50](#error-2025-10-26t0050160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68fd6b7f328f9755b2cea489/streams/test-acc-tf-s-2401127588398043658/processors | qa | flaky_500 | 6.02s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 15 seconds
- 2025-10-05 PASS 13 seconds
- 2025-10-06 PASS 13 seconds
- 2025-10-07 PASS 9 seconds
- 2025-10-08 PASS 15 seconds
- 2025-10-09 PASS 10 seconds
- 2025-10-10 PASS 12 seconds
- 2025-10-11 PASS 11 seconds
- 2025-10-12 PASS 11 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.2949773Z === RUN   TestMigStreamProcessor_basic
2025-10-13T01:24:12.2950915Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-4876817189003026950
2025-10-13T01:24:12.2952213Z     resource_migration_test.go:11: Creating execution stream instance: test-acc-tf-s-6101778557580258383
2025-10-13T01:24:12.2953015Z     resource_migration_test.go:11: 
2025-10-13T01:24:12.2954378Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:103
2025-10-13T01:24:12.2956903Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:166
2025-10-13T01:24:12.2960212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:49
2025-10-13T01:24:12.2963002Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_migration_test.go:11
2025-10-13T01:24:12.2964031Z         	Error:      	Received unexpected error:
2025-10-13T01:24:12.2965451Z         	            	(504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.2966105Z         	Test:       	TestMigStreamProcessor_basic
2025-10-13T01:24:12.2967532Z         	Messages:   	Stream instance creation failed: test-acc-tf-s-6101778557580258383, err: (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.2968586Z --- FAIL: TestMigStreamProcessor_basic (302.59s)
```

- 2025-10-14 PASS 13 seconds
- 2025-10-15 PASS 11 seconds
- 2025-10-16 PASS 11 seconds
- 2025-10-17 PASS 11 seconds
- 2025-10-18: MISSING
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1796446Z === RUN   TestMigStreamProcessor_basic
2025-10-19T00:50:12.1797273Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5655226490023386288
2025-10-19T00:50:12.1798016Z     resource_migration_test.go:11: Creating execution stream instance: test-acc-tf-s-7290335486553967260
2025-10-19T00:50:12.1798530Z     resource_migration_test.go:11: 
2025-10-19T00:50:12.1799436Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:103
2025-10-19T00:50:12.1801180Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:166
2025-10-19T00:50:12.1803009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:49
2025-10-19T00:50:12.1804961Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_migration_test.go:11
2025-10-19T00:50:12.1805764Z         	Error:      	Received unexpected error:
2025-10-19T00:50:12.1808101Z         	            	https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-19T00:50:12.1809171Z         	Test:       	TestMigStreamProcessor_basic
2025-10-19T00:50:12.1811042Z         	Messages:   	Stream instance creation failed: test-acc-tf-s-7290335486553967260, err: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-19T00:50:12.1812373Z --- FAIL: TestMigStreamProcessor_basic (32.83s)
```

- 2025-10-20 PASS 12 seconds
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 12 seconds
  - PASS 11 seconds
- 2025-10-23: MISSING
- 2025-10-24 PASS 12 seconds
- 2025-10-25: MISSING
- 2025-10-26

### Error 2025-10-26T00:50:16+00:00
```
2025-10-26T00:50:16.3455758Z === RUN   TestMigStreamProcessor_basic
2025-10-26T00:50:16.3456333Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5404195666897736472
2025-10-26T00:50:16.3457085Z     resource_migration_test.go:11: Creating execution stream instance: test-acc-tf-s-2401127588398043658
2025-10-26T00:50:16.3536535Z === CONT  TestMigStreamProcessor_basic
2025-10-26T00:50:16.3554684Z === NAME  TestMigStreamProcessor_basic
2025-10-26T00:50:16.3555209Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-10-26T00:50:16.3555625Z         
2025-10-26T00:50:16.3555907Z         Error: error fetching results
2025-10-26T00:50:16.3556180Z         
2025-10-26T00:50:16.3556554Z           with data.mongodbatlas_stream_processors.test,
2025-10-26T00:50:16.3557217Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_stream_processors" "test":
2025-10-26T00:50:16.3557820Z           39: 	data "mongodbatlas_stream_processors" "test" {
2025-10-26T00:50:16.3558132Z         
2025-10-26T00:50:16.3558922Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68fd6b7f328f9755b2cea489/streams/test-acc-tf-s-2401127588398043658/processors
2025-10-26T00:50:16.3560024Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-10-26T00:50:16.3560634Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-26T00:50:16.3561043Z         BadRequestDetail: 
2025-10-26T00:50:16.3572610Z    test_step_number=2 test_terraform_path=/home/runner/work/_temp/6848dba0-6856-4f6b-b491-4174d3bb1329/terraform test_working_directory=/tmp/plugintest2895832095 test_name=TestAccStreamProcessor_basic
2025-10-26T00:50:16.3599121Z --- FAIL: TestMigStreamProcessor_basic (6.24s)
```

- 2025-10-27 PASS 12 seconds
- 2025-10-28: MISSING
- 2025-10-29 PASS 16 seconds
- 2025-10-30: MISSING
- 2025-10-31 PASS 13 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 10 seconds
- 2025-11-03 PASS 10 seconds
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 13 seconds
  - PASS 13 seconds
- 2025-11-06: MISSING
- 2025-11-07 PASS 10 seconds
- 2025-11-08: MISSING
- 2025-11-09 PASS 9 seconds
- 2025-11-10 PASS 13 seconds
- 2025-11-11: MISSING
- 2025-11-12 PASS 13 seconds