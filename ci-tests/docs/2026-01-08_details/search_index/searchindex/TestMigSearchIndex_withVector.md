# search_index/searchindex/TestMigSearchIndex_withVector Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:34](#error-2026-01-07t0034490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-4782360996828019079 | dev | flaky_500 | 182.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 10 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 12 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 10 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 10 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 12 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 11 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 10 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 11 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 10 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 10 seconds
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:34:49+00:00
```
2026-01-07T00:34:49.2747129Z === RUN   TestMigSearchIndex_withVector
2026-01-07T00:34:49.2747871Z     resource_search_index_migration_test.go:15: Creating execution cluster: test-acc-tf-c-4782360996828019079
2026-01-07T00:34:50.0265717Z 2026/01/07 00:34:50 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T00:37:51.6083093Z     resource_search_index_migration_test.go:15: 
2026-01-07T00:37:51.6084694Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T00:37:51.6088815Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T00:37:51.6091459Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:342
2026-01-07T00:37:51.6093879Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:15
2026-01-07T00:37:51.6094721Z         	Error:      	Received unexpected error:
2026-01-07T00:37:51.6097132Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-4782360996828019079 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:37:51.6098361Z         	Test:       	TestMigSearchIndex_withVector
2026-01-07T00:37:51.6100422Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4782360996828019079, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-4782360996828019079 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:37:51.6102382Z --- FAIL: TestMigSearchIndex_withVector (182.34s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 11 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 12 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 11 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 11 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 seconds
