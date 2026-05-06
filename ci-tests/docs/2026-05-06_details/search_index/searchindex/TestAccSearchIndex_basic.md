# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:42](#error-2026-04-11t0042380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.03s
[2026-04-16 00:50](#error-2026-04-16t0050340000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters | dev | out_of_capacity | 4.00s
[2026-04-18 00:44](#error-2026-04-18t0044330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.07s
[2026-04-25 00:46](#error-2026-04-25t0046220000) |  | dev |  | 1140.07s
[2026-04-28 00:53](#error-2026-04-28t0053470000) |  | dev |  | 1072.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 12 minutes
- 2026-04-08 PASS 8 seconds
- 2026-04-09 PASS 20 minutes
- 2026-04-10 PASS 8 seconds
- 2026-04-11

### Error 2026-04-11T00:42:38+00:00
```
2026-04-11T00:42:38.2919150Z === RUN   TestAccSearchIndex_basic
2026-04-11T00:42:38.2920350Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-8165247970166916986
2026-04-11T00:43:46.5419708Z     resource_search_index_test.go:17: 
2026-04-11T00:43:46.5421621Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:43:46.5423604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:43:46.5425854Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:43:46.5427817Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-11T00:43:46.5430208Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-04-11T00:43:46.5432353Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-04-11T00:43:46.5433158Z         	Error:      	Received unexpected error:
2026-04-11T00:43:46.5435076Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:43:46.5436093Z         	Test:       	TestAccSearchIndex_basic
2026-04-11T00:43:46.5437804Z         	Messages:   	Project creation failed: test-acc-tf-p-8165247970166916986, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:43:46.5439192Z --- FAIL: TestAccSearchIndex_basic (68.25s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 8 seconds
- 2026-04-14 PASS 31 minutes
- 2026-04-15 PASS 8 seconds
- 2026-04-16

### Error 2026-04-16T00:50:34+00:00
```
2026-04-16T00:50:34.7909705Z === RUN   TestAccSearchIndex_basic
2026-04-16T00:50:34.7911451Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-5620696696740552020
2026-04-16T00:50:38.2659858Z     resource_search_index_test.go:17: Creating execution cluster: test-acc-tf-c-2959191838432783260
2026-04-16T00:50:38.8180112Z     resource_search_index_test.go:17: 
2026-04-16T00:50:38.8182236Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:50:38.8187381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:50:38.8190699Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-04-16T00:50:38.8194699Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-04-16T00:50:38.8196205Z         	Error:      	Received unexpected error:
2026-04-16T00:50:38.8199116Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:38.8200659Z         	Test:       	TestAccSearchIndex_basic
2026-04-16T00:50:38.8203175Z         	Messages:   	Cluster creation failed: test-acc-tf-c-2959191838432783260, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:38.8204903Z --- FAIL: TestAccSearchIndex_basic (4.03s)
```

- 2026-04-17 PASS 8 seconds
- 2026-04-18

### Error 2026-04-18T00:44:33+00:00
```
2026-04-18T00:44:33.6827818Z === RUN   TestAccSearchIndex_basic
2026-04-18T00:44:33.6830228Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-4548543355742048737
2026-04-18T00:45:56.4042835Z     resource_search_index_test.go:17: 
2026-04-18T00:45:56.4044671Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T00:45:56.4047221Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-18T00:45:56.4049373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-18T00:45:56.4051869Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-18T00:45:56.4053868Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-04-18T00:45:56.4055864Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-04-18T00:45:56.4056674Z         	Error:      	Received unexpected error:
2026-04-18T00:45:56.4058565Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:45:56.4059576Z         	Test:       	TestAccSearchIndex_basic
2026-04-18T00:45:56.4061602Z         	Messages:   	Project creation failed: test-acc-tf-p-4548543355742048737, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:45:56.4062745Z --- FAIL: TestAccSearchIndex_basic (82.72s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 8 seconds
- 2026-04-21 PASS 17 minutes
- 2026-04-22 PASS 8 seconds
- 2026-04-23 PASS 17 minutes
- 2026-04-24 PASS 8 seconds
- 2026-04-25

### Error 2026-04-25T00:46:22+00:00
```
2026-04-25T00:46:22.2106631Z === RUN   TestAccSearchIndex_basic
2026-04-25T00:46:22.2108244Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-1322239589612317451
2026-04-25T00:46:24.9538600Z     resource_search_index_test.go:17: Creating execution cluster: test-acc-tf-c-5817343319789154281
2026-04-25T00:46:25.8654600Z 2026/04/25 00:46:25 [DEBUG] Waiting for state to become: [IDLE]
2026-04-25T00:49:26.1561061Z 2026/04/25 00:49:26 [TRACE] Waiting 1m0s before next try
2026-04-25T00:50:26.4509320Z 2026/04/25 00:50:26 [TRACE] Waiting 10s before next try
2026-04-25T00:50:36.6768109Z 2026/04/25 00:50:36 [TRACE] Waiting 1m0s before next try
2026-04-25T00:51:37.0211200Z 2026/04/25 00:51:37 [TRACE] Waiting 10s before next try
2026-04-25T00:51:47.2365892Z 2026/04/25 00:51:47 [TRACE] Waiting 1m0s before next try
2026-04-25T00:52:47.6028905Z 2026/04/25 00:52:47 [TRACE] Waiting 10s before next try
2026-04-25T00:52:57.8308967Z 2026/04/25 00:52:57 [TRACE] Waiting 1m0s before next try
2026-04-25T00:53:58.1721202Z 2026/04/25 00:53:58 [TRACE] Waiting 10s before next try
2026-04-25T00:54:08.4160561Z 2026/04/25 00:54:08 [TRACE] Waiting 1m0s before next try
2026-04-25T00:55:08.6939601Z 2026/04/25 00:55:08 [TRACE] Waiting 10s before next try
2026-04-25T00:55:18.9269382Z 2026/04/25 00:55:18 [TRACE] Waiting 1m0s before next try
2026-04-25T00:56:19.2263587Z 2026/04/25 00:56:19 [TRACE] Waiting 10s before next try
2026-04-25T00:56:29.4509526Z 2026/04/25 00:56:29 [TRACE] Waiting 1m0s before next try
2026-04-25T00:57:30.0371678Z 2026/04/25 00:57:30 [DEBUG] Waiting for state to become: [COMPLETED]
2026-04-25T00:58:30.3916102Z 2026/04/25 00:58:30 [TRACE] Waiting 1m0s before next try
2026-04-25T00:59:30.6861791Z 2026/04/25 00:59:30 [TRACE] Waiting 10s before next try
2026-04-25T00:59:40.8593642Z 2026/04/25 00:59:40 [TRACE] Waiting 1m0s before next try
2026-04-25T01:00:41.1451681Z 2026/04/25 01:00:41 [TRACE] Waiting 10s before next try
2026-04-25T01:00:51.3434237Z 2026/04/25 01:00:51 [TRACE] Waiting 1m0s before next try
2026-04-25T01:01:51.5815609Z 2026/04/25 01:01:51 [TRACE] Waiting 10s before next try
2026-04-25T01:02:01.7638731Z 2026/04/25 01:02:01 [TRACE] Waiting 1m0s before next try
2026-04-25T01:03:02.0279127Z 2026/04/25 01:03:02 [TRACE] Waiting 10s before next try
2026-04-25T01:03:12.2041660Z 2026/04/25 01:03:12 [TRACE] Waiting 1m0s before next try
2026-04-25T01:04:12.4465155Z 2026/04/25 01:04:12 [TRACE] Waiting 10s before next try
2026-04-25T01:04:22.6224453Z 2026/04/25 01:04:22 [TRACE] Waiting 1m0s before next try
2026-04-25T01:05:22.8966631Z     resource_search_index_test.go:17: 
2026-04-25T01:05:22.8969272Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:198
2026-04-25T01:05:22.8975697Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-04-25T01:05:22.8978578Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-04-25T01:05:22.8979743Z         	Error:      	Received unexpected error:
2026-04-25T01:05:22.8981161Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-25T01:05:22.8982234Z         	Test:       	TestAccSearchIndex_basic
2026-04-25T01:05:22.8982572Z --- FAIL: TestAccSearchIndex_basic (1140.69s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 12 seconds
- 2026-04-28

### Error 2026-04-28T00:53:47+00:00
```
2026-04-28T00:53:47.8480500Z === RUN   TestAccSearchIndex_basic
2026-04-28T00:53:47.8481597Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-7786878331455899002
2026-04-28T00:53:50.9333876Z     resource_search_index_test.go:17: Creating execution cluster: test-acc-tf-c-4599407163287334966
2026-04-28T00:53:51.9026300Z 2026/04/28 00:53:51 [DEBUG] Waiting for state to become: [IDLE]
2026-04-28T00:56:52.3396416Z 2026/04/28 00:56:52 [TRACE] Waiting 1m0s before next try
2026-04-28T00:57:52.9497177Z 2026/04/28 00:57:52 [TRACE] Waiting 10s before next try
2026-04-28T00:58:03.2196651Z 2026/04/28 00:58:03 [TRACE] Waiting 1m0s before next try
2026-04-28T00:59:03.6254257Z 2026/04/28 00:59:03 [TRACE] Waiting 10s before next try
2026-04-28T00:59:13.8558547Z 2026/04/28 00:59:13 [TRACE] Waiting 1m0s before next try
2026-04-28T01:00:14.2771003Z 2026/04/28 01:00:14 [TRACE] Waiting 10s before next try
2026-04-28T01:00:24.5480014Z 2026/04/28 01:00:24 [TRACE] Waiting 1m0s before next try
2026-04-28T01:01:25.0737742Z 2026/04/28 01:01:25 [TRACE] Waiting 10s before next try
2026-04-28T01:01:35.3412058Z 2026/04/28 01:01:35 [TRACE] Waiting 1m0s before next try
2026-04-28T01:02:35.8026876Z 2026/04/28 01:02:35 [TRACE] Waiting 10s before next try
2026-04-28T01:02:46.0819614Z 2026/04/28 01:02:46 [TRACE] Waiting 1m0s before next try
2026-04-28T01:03:46.5406561Z 2026/04/28 01:03:46 [TRACE] Waiting 10s before next try
2026-04-28T01:03:56.8217430Z 2026/04/28 01:03:56 [TRACE] Waiting 1m0s before next try
2026-04-28T01:04:57.6036892Z 2026/04/28 01:04:57 [DEBUG] Waiting for state to become: [COMPLETED]
2026-04-28T01:05:57.9831011Z 2026/04/28 01:05:57 [TRACE] Waiting 1m0s before next try
2026-04-28T01:06:58.3458098Z 2026/04/28 01:06:58 [TRACE] Waiting 10s before next try
2026-04-28T01:07:08.5481632Z 2026/04/28 01:07:08 [TRACE] Waiting 1m0s before next try
2026-04-28T01:08:08.9452059Z 2026/04/28 01:08:08 [TRACE] Waiting 10s before next try
2026-04-28T01:08:19.1409520Z 2026/04/28 01:08:19 [TRACE] Waiting 1m0s before next try
2026-04-28T01:09:19.4018204Z 2026/04/28 01:09:19 [TRACE] Waiting 10s before next try
2026-04-28T01:09:29.5959123Z 2026/04/28 01:09:29 [TRACE] Waiting 1m0s before next try
2026-04-28T01:10:29.9648624Z 2026/04/28 01:10:29 [TRACE] Waiting 10s before next try
2026-04-28T01:10:40.1435391Z 2026/04/28 01:10:40 [TRACE] Waiting 1m0s before next try
2026-04-28T01:11:40.4244707Z     resource_search_index_test.go:17: 
2026-04-28T01:11:40.4246201Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:198
2026-04-28T01:11:40.4250678Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-04-28T01:11:40.4252870Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-04-28T01:11:40.4253637Z         	Error:      	Received unexpected error:
2026-04-28T01:11:40.4254686Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-04-28T01:11:40.4255845Z         	Test:       	TestAccSearchIndex_basic
2026-04-28T01:11:40.4256170Z --- FAIL: TestAccSearchIndex_basic (1072.58s)
```

- 2026-04-29 PASS 13 seconds
- 2026-04-30 PASS 22 minutes
- 2026-05-01 PASS 14 seconds
- 2026-05-02 PASS 13 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 15 seconds
- 2026-05-05 PASS 20 minutes
- 2026-05-06 PASS 13 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 8 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 7 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 8 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 8 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 13 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 13 seconds
- 2026-05-04 PASS 15 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 12 seconds
