# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 8 TestRuns in dev, qa from 2026-09-08 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 2)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-10 00:40](#error-2026-09-10t0040210000) |  | dev | 869.08s
[2026-09-11 07:04](#error-2026-09-11t0704190000) |  | dev | 0.00s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08 PASS 20 minutes
- 2026-09-09 PASS 15 seconds
- 2026-09-10

### Error 2026-09-10T00:40:21+00:00
```
2026-09-10T00:40:21.7707248Z === RUN   TestAccSearchIndex_basic
2026-09-10T00:40:21.7708236Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-1471566880603577758
2026-09-10T00:40:24.5493739Z     resource_search_index_test.go:17: Creating execution cluster: test-acc-tf-c-3763408995681801236
2026-09-10T00:40:25.2655939Z 2026/09/10 00:40:25 [DEBUG] Waiting for state to become: [IDLE]
2026-09-10T00:43:25.6944471Z 2026/09/10 00:43:25 [TRACE] Waiting 1m0s before next try
2026-09-10T00:44:26.1179273Z 2026/09/10 00:44:26 [TRACE] Waiting 10s before next try
2026-09-10T00:44:36.3203175Z 2026/09/10 00:44:36 [TRACE] Waiting 1m0s before next try
2026-09-10T00:45:36.7413877Z 2026/09/10 00:45:36 [TRACE] Waiting 10s before next try
2026-09-10T00:45:46.9357424Z 2026/09/10 00:45:46 [TRACE] Waiting 1m0s before next try
2026-09-10T00:46:47.3341706Z 2026/09/10 00:46:47 [TRACE] Waiting 10s before next try
2026-09-10T00:46:57.5271263Z 2026/09/10 00:46:57 [TRACE] Waiting 1m0s before next try
2026-09-10T00:47:57.9483551Z 2026/09/10 00:47:57 [TRACE] Waiting 10s before next try
2026-09-10T00:48:08.1345241Z 2026/09/10 00:48:08 [TRACE] Waiting 1m0s before next try
2026-09-10T00:49:08.5505231Z 2026/09/10 00:49:08 [TRACE] Waiting 10s before next try
2026-09-10T00:49:18.7702516Z 2026/09/10 00:49:18 [TRACE] Waiting 1m0s before next try
2026-09-10T00:50:19.1342832Z 2026/09/10 00:50:19 [TRACE] Waiting 10s before next try
2026-09-10T00:50:29.3339780Z 2026/09/10 00:50:29 [TRACE] Waiting 1m0s before next try
2026-09-10T00:51:29.6908638Z 2026/09/10 00:51:29 [TRACE] Waiting 10s before next try
2026-09-10T00:51:39.8696130Z 2026/09/10 00:51:39 [TRACE] Waiting 1m0s before next try
2026-09-10T00:52:40.2675171Z 2026/09/10 00:52:40 [TRACE] Waiting 10s before next try
2026-09-10T00:52:50.4832042Z 2026/09/10 00:52:50 [TRACE] Waiting 1m0s before next try
2026-09-10T00:53:51.0603680Z 2026/09/10 00:53:51 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-10T00:54:51.5171275Z     resource_search_index_test.go:17: 
2026-09-10T00:54:51.5172499Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T00:54:51.5177108Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:275
2026-09-10T00:54:51.5179464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-09-10T00:54:51.5180153Z         	Error:      	Received unexpected error:
2026-09-10T00:54:51.5180827Z         	            	sample dataset load 6aa1ff9f4ab31ba345271413 failed for cluster 6aa1fc755b8d9510e88fe9bf:test-acc-tf-c-3763408995681801236
2026-09-10T00:54:51.5181206Z         	Test:       	TestAccSearchIndex_basic
2026-09-10T00:54:51.5181412Z --- FAIL: TestAccSearchIndex_basic (869.75s)
```

- 2026-09-11
  - PASS 16 seconds
  - FAIL unknown

### Error 2026-09-11T07:04:19+00:00
```
2026-09-11T07:04:19.3688513Z === RUN   TestAccSearchIndex_basic
2026-09-11T07:04:19.3688801Z     resource_search_index_test.go:17: 
2026-09-11T07:04:19.3689600Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3691158Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:275
2026-09-11T07:04:19.3693419Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-09-11T07:04:19.3694075Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3695075Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3695629Z         	Test:       	TestAccSearchIndex_basic
2026-09-11T07:04:19.3696090Z --- FAIL: TestAccSearchIndex_basic (0.00s)
```

- 2026-09-12 PASS 17 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 14 seconds

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 13 seconds
- 2026-09-14: MISSING
