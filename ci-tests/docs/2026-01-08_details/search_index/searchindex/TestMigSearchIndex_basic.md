# search_index/searchindex/TestMigSearchIndex_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-4235665414507822374 | dev | flaky_500 | 254.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 13 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 12 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 14 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 13 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 14 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 14 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 13 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 14 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 12 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 13 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.0374124Z === RUN   TestMigSearchIndex_basic
2026-01-07T00:30:35.0375090Z     resource_search_index_migration_test.go:11: Creating execution project (1): test-acc-tf-p-7129274642459905647
2026-01-07T00:30:37.5288962Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-4235665414507822374
2026-01-07T00:30:38.3061048Z 2026/01/07 00:30:38 [DEBUG] Waiting for state to become: [IDLE]
2026-01-07T00:33:38.6709347Z 2026/01/07 00:33:38 [TRACE] Waiting 1m0s before next try
2026-01-07T00:34:39.0566344Z 2026/01/07 00:34:39 [TRACE] Waiting 10s before next try
2026-01-07T00:34:49.2726922Z     resource_search_index_migration_test.go:11: 
2026-01-07T00:34:49.2728989Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2026-01-07T00:34:49.2731756Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:181
2026-01-07T00:34:49.2734524Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-01-07T00:34:49.2737235Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2026-01-07T00:34:49.2738395Z         	Error:      	Received unexpected error:
2026-01-07T00:34:49.2741312Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-4235665414507822374 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:34:49.2742815Z         	Test:       	TestMigSearchIndex_basic
2026-01-07T00:34:49.2745179Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4235665414507822374, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92bd59b8466ea71d735/clusters/test-acc-tf-c-4235665414507822374 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:34:49.2746794Z --- FAIL: TestMigSearchIndex_basic (254.24s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 10 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 9 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 10 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 10 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 12 minutes
