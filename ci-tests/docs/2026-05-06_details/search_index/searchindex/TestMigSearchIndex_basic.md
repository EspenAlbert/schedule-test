# search_index/searchindex/TestMigSearchIndex_basic Test Details
# Found 21 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 19) FAIL(x 2)
Success rate: 90.48%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-27 00:51](#error-2026-04-27t0051220000) |  | dev | 1069.01s
[2026-04-29 00:55](#error-2026-04-29t0055150000) |  | dev | 1209.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 13 minutes
- 2026-04-09: MISSING
- 2026-04-10 PASS 20 minutes
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS 14 minutes
- 2026-04-14: MISSING
- 2026-04-15 PASS 14 minutes
- 2026-04-16: MISSING
- 2026-04-17 PASS 13 minutes
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20 PASS 13 minutes
- 2026-04-21: MISSING
- 2026-04-22 PASS 48 minutes
- 2026-04-23: MISSING
- 2026-04-24 PASS 14 minutes
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27

### Error 2026-04-27T00:51:22+00:00
```
2026-04-27T00:51:22.0439077Z === RUN   TestMigSearchIndex_basic
2026-04-27T00:51:22.0441979Z     resource_search_index_migration_test.go:11: Creating execution project (1): test-acc-tf-p-6501283956302709154
2026-04-27T00:51:24.5876803Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-3938713134113741709
2026-04-27T00:51:25.4357304Z 2026/04/27 00:51:25 [DEBUG] Waiting for state to become: [IDLE]
2026-04-27T00:54:25.8760268Z 2026/04/27 00:54:25 [TRACE] Waiting 1m0s before next try
2026-04-27T00:55:26.1914027Z 2026/04/27 00:55:26 [TRACE] Waiting 10s before next try
2026-04-27T00:55:36.3426953Z 2026/04/27 00:55:36 [TRACE] Waiting 1m0s before next try
2026-04-27T00:56:36.6124327Z 2026/04/27 00:56:36 [TRACE] Waiting 10s before next try
2026-04-27T00:56:46.7644813Z 2026/04/27 00:56:46 [TRACE] Waiting 1m0s before next try
2026-04-27T00:57:47.0545723Z 2026/04/27 00:57:47 [TRACE] Waiting 10s before next try
2026-04-27T00:57:57.2092620Z 2026/04/27 00:57:57 [TRACE] Waiting 1m0s before next try
2026-04-27T00:58:57.8609988Z 2026/04/27 00:58:57 [TRACE] Waiting 10s before next try
2026-04-27T00:59:08.0146096Z 2026/04/27 00:59:08 [TRACE] Waiting 1m0s before next try
2026-04-27T01:00:08.3291920Z 2026/04/27 01:00:08 [TRACE] Waiting 10s before next try
2026-04-27T01:00:18.4729976Z 2026/04/27 01:00:18 [TRACE] Waiting 1m0s before next try
2026-04-27T01:01:18.7337055Z 2026/04/27 01:01:18 [TRACE] Waiting 10s before next try
2026-04-27T01:01:28.8839424Z 2026/04/27 01:01:28 [TRACE] Waiting 1m0s before next try
2026-04-27T01:02:29.3646827Z 2026/04/27 01:02:29 [DEBUG] Waiting for state to become: [COMPLETED]
2026-04-27T01:03:29.4902851Z 2026/04/27 01:03:29 [TRACE] Waiting 1m0s before next try
2026-04-27T01:04:29.6876295Z 2026/04/27 01:04:29 [TRACE] Waiting 10s before next try
2026-04-27T01:04:39.8091248Z 2026/04/27 01:04:39 [TRACE] Waiting 1m0s before next try
2026-04-27T01:05:39.9839451Z 2026/04/27 01:05:39 [TRACE] Waiting 10s before next try
2026-04-27T01:05:50.0980731Z 2026/04/27 01:05:50 [TRACE] Waiting 1m0s before next try
2026-04-27T01:06:50.3705309Z 2026/04/27 01:06:50 [TRACE] Waiting 10s before next try
2026-04-27T01:07:00.4768566Z 2026/04/27 01:07:00 [TRACE] Waiting 1m0s before next try
2026-04-27T01:08:00.7091070Z 2026/04/27 01:08:00 [TRACE] Waiting 10s before next try
2026-04-27T01:08:10.8355472Z 2026/04/27 01:08:10 [TRACE] Waiting 1m0s before next try
2026-04-27T01:09:11.0899467Z     resource_search_index_migration_test.go:11: 
2026-04-27T01:09:11.0902034Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:198
2026-04-27T01:09:11.0906891Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-04-27T01:09:11.0910961Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2026-04-27T01:09:11.0912680Z         	Error:      	Received unexpected error:
2026-04-27T01:09:11.0913862Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-27T01:09:11.0914692Z         	Test:       	TestMigSearchIndex_basic
2026-04-27T01:09:11.0915523Z --- FAIL: TestMigSearchIndex_basic (1069.05s)
```

- 2026-04-28: MISSING
- 2026-04-29

### Error 2026-04-29T00:55:15+00:00
```
2026-04-29T00:55:15.0787722Z === RUN   TestMigSearchIndex_basic
2026-04-29T00:55:15.0794324Z     resource_search_index_migration_test.go:11: Creating execution project (1): test-acc-tf-p-5463842680514957345
2026-04-29T00:55:18.0734725Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-4400636720932160996
2026-04-29T00:55:18.7366058Z 2026/04/29 00:55:18 [DEBUG] Waiting for state to become: [IDLE]
2026-04-29T00:58:18.9943287Z 2026/04/29 00:58:18 [TRACE] Waiting 1m0s before next try
2026-04-29T00:59:19.2505048Z 2026/04/29 00:59:19 [TRACE] Waiting 10s before next try
2026-04-29T00:59:29.4068623Z 2026/04/29 00:59:29 [TRACE] Waiting 1m0s before next try
2026-04-29T01:00:29.6897740Z 2026/04/29 01:00:29 [TRACE] Waiting 10s before next try
2026-04-29T01:00:39.8410938Z 2026/04/29 01:00:39 [TRACE] Waiting 1m0s before next try
2026-04-29T01:01:40.0843737Z 2026/04/29 01:01:40 [TRACE] Waiting 10s before next try
2026-04-29T01:01:50.2266110Z 2026/04/29 01:01:50 [TRACE] Waiting 1m0s before next try
2026-04-29T01:02:50.4778760Z 2026/04/29 01:02:50 [TRACE] Waiting 10s before next try
2026-04-29T01:03:00.6483547Z 2026/04/29 01:03:00 [TRACE] Waiting 1m0s before next try
2026-04-29T01:04:00.8690277Z 2026/04/29 01:04:00 [TRACE] Waiting 10s before next try
2026-04-29T01:04:11.0096631Z 2026/04/29 01:04:11 [TRACE] Waiting 1m0s before next try
2026-04-29T01:05:11.3222258Z 2026/04/29 01:05:11 [TRACE] Waiting 10s before next try
2026-04-29T01:05:21.4659004Z 2026/04/29 01:05:21 [TRACE] Waiting 1m0s before next try
2026-04-29T01:06:21.8602653Z 2026/04/29 01:06:21 [TRACE] Waiting 10s before next try
2026-04-29T01:06:32.0370342Z 2026/04/29 01:06:32 [TRACE] Waiting 1m0s before next try
2026-04-29T01:07:32.3298251Z 2026/04/29 01:07:32 [TRACE] Waiting 10s before next try
2026-04-29T01:07:42.5527609Z 2026/04/29 01:07:42 [TRACE] Waiting 1m0s before next try
2026-04-29T01:08:43.0183194Z 2026/04/29 01:08:43 [DEBUG] Waiting for state to become: [COMPLETED]
2026-04-29T01:09:43.1631488Z 2026/04/29 01:09:43 [TRACE] Waiting 1m0s before next try
2026-04-29T01:10:43.2880060Z 2026/04/29 01:10:43 [TRACE] Waiting 10s before next try
2026-04-29T01:10:53.4015802Z 2026/04/29 01:10:53 [TRACE] Waiting 1m0s before next try
2026-04-29T01:11:53.5947600Z 2026/04/29 01:11:53 [TRACE] Waiting 10s before next try
2026-04-29T01:12:03.7019193Z 2026/04/29 01:12:03 [TRACE] Waiting 1m0s before next try
2026-04-29T01:13:03.8528571Z 2026/04/29 01:13:03 [TRACE] Waiting 10s before next try
2026-04-29T01:13:13.9593468Z 2026/04/29 01:13:13 [TRACE] Waiting 1m0s before next try
2026-04-29T01:14:14.1063933Z 2026/04/29 01:14:14 [TRACE] Waiting 10s before next try
2026-04-29T01:14:24.2272799Z 2026/04/29 01:14:24 [TRACE] Waiting 1m0s before next try
2026-04-29T01:15:24.3573326Z     resource_search_index_migration_test.go:11: 
2026-04-29T01:15:24.3576009Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:198
2026-04-29T01:15:24.3583552Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-04-29T01:15:24.3587822Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2026-04-29T01:15:24.3589454Z         	Error:      	Received unexpected error:
2026-04-29T01:15:24.3591479Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-29T01:15:24.3592853Z         	Test:       	TestMigSearchIndex_basic
2026-04-29T01:15:24.3593484Z --- FAIL: TestMigSearchIndex_basic (1209.28s)
```

- 2026-04-30: MISSING
- 2026-05-01 PASS 13 minutes
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 13 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 15 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 14 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 15 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 14 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 15 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 15 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 15 minutes
- 2026-05-04 PASS 14 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 16 minutes
