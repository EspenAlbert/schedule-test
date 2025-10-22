# stream/streamprocessor/TestMigStreamProcessor_basic Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 39) FAIL(x 2)
Success rate: 95.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev |  | 302.06s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f43175353f113dafd152bb/streams | qa | flaky_500 | 32.08s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 12 seconds
- 2025-09-24 PASS 10 seconds
- 2025-09-25 PASS 13 seconds
- 2025-09-26 PASS 10 seconds
- 2025-09-27 PASS 13 seconds
- 2025-09-28 PASS 11 seconds
- 2025-09-29
  - PASS 13 seconds
  - PASS 15 seconds
- 2025-09-30
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 18 seconds
- 2025-10-01
  - PASS 15 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 16 seconds
  - PASS 10 seconds
  - PASS 13 seconds
- 2025-10-02 PASS 11 seconds
- 2025-10-03 PASS 11 seconds
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