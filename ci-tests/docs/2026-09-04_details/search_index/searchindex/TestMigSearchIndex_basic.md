# search_index/searchindex/TestMigSearchIndex_basic Test Details
# Found 6 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 5) FAIL
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-28 03:08](#error-2026-08-28t0308250000) |  | dev | 872.07s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07 PASS 15 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28

### Error 2026-08-28T03:08:25+00:00
```
2026-08-28T03:08:25.5753377Z === RUN   TestMigSearchIndex_basic
2026-08-28T03:08:25.5754154Z     resource_search_index_migration_test.go:11: Creating execution project (1): test-acc-tf-p-6759218264576301602
2026-08-28T03:08:30.4782267Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-3901854463039680436
2026-08-28T03:08:31.4036301Z 2026/08/28 03:08:31 [DEBUG] Waiting for state to become: [IDLE]
2026-08-28T03:11:31.8094266Z 2026/08/28 03:11:31 [TRACE] Waiting 1m0s before next try
2026-08-28T03:12:32.2040104Z 2026/08/28 03:12:32 [TRACE] Waiting 10s before next try
2026-08-28T03:12:42.4601656Z 2026/08/28 03:12:42 [TRACE] Waiting 1m0s before next try
2026-08-28T03:13:42.8731367Z 2026/08/28 03:13:42 [TRACE] Waiting 10s before next try
2026-08-28T03:13:53.1242536Z 2026/08/28 03:13:53 [TRACE] Waiting 1m0s before next try
2026-08-28T03:14:53.5443456Z 2026/08/28 03:14:53 [TRACE] Waiting 10s before next try
2026-08-28T03:15:03.7895337Z 2026/08/28 03:15:03 [TRACE] Waiting 1m0s before next try
2026-08-28T03:16:04.1746704Z 2026/08/28 03:16:04 [TRACE] Waiting 10s before next try
2026-08-28T03:16:14.4308430Z 2026/08/28 03:16:14 [TRACE] Waiting 1m0s before next try
2026-08-28T03:17:14.8144541Z 2026/08/28 03:17:14 [TRACE] Waiting 10s before next try
2026-08-28T03:17:25.0947313Z 2026/08/28 03:17:25 [TRACE] Waiting 1m0s before next try
2026-08-28T03:18:25.4964399Z 2026/08/28 03:18:25 [TRACE] Waiting 10s before next try
2026-08-28T03:18:35.7360637Z 2026/08/28 03:18:35 [TRACE] Waiting 1m0s before next try
2026-08-28T03:19:36.1098296Z 2026/08/28 03:19:36 [TRACE] Waiting 10s before next try
2026-08-28T03:19:46.3626519Z 2026/08/28 03:19:46 [TRACE] Waiting 1m0s before next try
2026-08-28T03:20:46.8346125Z 2026/08/28 03:20:46 [TRACE] Waiting 10s before next try
2026-08-28T03:20:57.0578393Z 2026/08/28 03:20:57 [TRACE] Waiting 1m0s before next try
2026-08-28T03:21:57.9540023Z 2026/08/28 03:21:57 [DEBUG] Waiting for state to become: [COMPLETED]
2026-08-28T03:22:58.3154598Z     resource_search_index_migration_test.go:11: 
2026-08-28T03:22:58.3156060Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-08-28T03:22:58.3160669Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:178
2026-08-28T03:22:58.3162551Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:275
2026-08-28T03:22:58.3164842Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2026-08-28T03:22:58.3165958Z         	Error:      	Received unexpected error:
2026-08-28T03:22:58.3166892Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-08-28T03:22:58.3167521Z         	Test:       	TestMigSearchIndex_basic
2026-08-28T03:22:58.3167809Z --- FAIL: TestMigSearchIndex_basic (872.74s)
```

- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 19 minutes
- 2026-09-01: MISSING
- 2026-09-02 PASS 18 minutes
- 2026-09-03: MISSING
- 2026-09-04 PASS 26 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 17 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
