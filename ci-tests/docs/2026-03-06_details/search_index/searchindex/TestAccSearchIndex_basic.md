# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036450000) |  | dev | flaky_500 | 811.03s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 16 minutes
- 2026-02-06 PASS 8 seconds
- 2026-02-07 PASS 14 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 8 seconds
- 2026-02-10 PASS 15 minutes
- 2026-02-11 PASS 8 seconds
- 2026-02-12 PASS 15 minutes
- 2026-02-13 PASS 9 seconds
- 2026-02-14 PASS 15 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 8 seconds
- 2026-02-17 PASS 16 minutes
- 2026-02-18 PASS 8 seconds
- 2026-02-19 PASS 21 minutes
- 2026-02-20 PASS 9 seconds
- 2026-02-21 PASS 16 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 7 seconds
- 2026-02-24

### Error 2026-02-24T00:36:45+00:00
```
2026-02-24T00:36:45.8268839Z === RUN   TestAccSearchIndex_basic
2026-02-24T00:36:45.8270890Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-2161041221814497003
2026-02-24T00:36:48.8462833Z     resource_search_index_test.go:17: Creating execution cluster: test-acc-tf-c-3544188480149776093
2026-02-24T00:36:50.0063543Z 2026/02/24 00:36:50 [DEBUG] Waiting for state to become: [IDLE]
2026-02-24T00:39:50.2865268Z 2026/02/24 00:39:50 [TRACE] Waiting 1m0s before next try
2026-02-24T00:40:50.5512867Z 2026/02/24 00:40:50 [TRACE] Waiting 10s before next try
2026-02-24T00:41:00.7563651Z 2026/02/24 00:41:00 [TRACE] Waiting 1m0s before next try
2026-02-24T00:42:01.0268773Z 2026/02/24 00:42:01 [TRACE] Waiting 10s before next try
2026-02-24T00:42:11.2383091Z 2026/02/24 00:42:11 [TRACE] Waiting 1m0s before next try
2026-02-24T00:43:11.5290199Z 2026/02/24 00:43:11 [TRACE] Waiting 10s before next try
2026-02-24T00:43:21.7217421Z 2026/02/24 00:43:21 [TRACE] Waiting 1m0s before next try
2026-02-24T00:44:21.9626344Z 2026/02/24 00:44:21 [TRACE] Waiting 10s before next try
2026-02-24T00:44:32.1523379Z 2026/02/24 00:44:32 [TRACE] Waiting 1m0s before next try
2026-02-24T00:45:32.3941971Z 2026/02/24 00:45:32 [TRACE] Waiting 10s before next try
2026-02-24T00:45:42.6045083Z 2026/02/24 00:45:42 [TRACE] Waiting 1m0s before next try
2026-02-24T00:46:42.8763883Z 2026/02/24 00:46:42 [TRACE] Waiting 10s before next try
2026-02-24T00:46:53.1792007Z 2026/02/24 00:46:53 [TRACE] Waiting 1m0s before next try
2026-02-24T00:47:53.5106012Z 2026/02/24 00:47:53 [TRACE] Waiting 10s before next try
2026-02-24T00:48:03.7182462Z 2026/02/24 00:48:03 [TRACE] Waiting 1m0s before next try
2026-02-24T00:49:06.0948832Z 2026/02/24 00:49:06 [TRACE] Waiting 10s before next try
2026-02-24T00:49:16.3511078Z 2026/02/24 00:49:16 [TRACE] Waiting 1m0s before next try
2026-02-24T00:50:17.1581200Z     resource_search_index_test.go:17: 
2026-02-24T00:50:17.1583224Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:198
2026-02-24T00:50:17.1589684Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:250
2026-02-24T00:50:17.1593657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-02-24T00:50:17.1595075Z         	Error:      	Received unexpected error:
2026-02-24T00:50:17.1597332Z         	            	cluster(699cf29e8dfec41eaa845d3d:test-acc-tf-c-3544188480149776093) loading sample data set error: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:50:17.1598332Z         	Test:       	TestAccSearchIndex_basic
2026-02-24T00:50:17.1598677Z --- FAIL: TestAccSearchIndex_basic (811.33s)
```

- 2026-02-25 PASS 8 seconds
- 2026-02-26 PASS 16 minutes
- 2026-02-27 PASS 9 seconds
- 2026-02-28 PASS 15 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 9 seconds
- 2026-03-03 PASS 19 minutes
- 2026-03-04 PASS 8 seconds
- 2026-03-05 PASS 19 minutes
- 2026-03-06 PASS 9 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 8 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 8 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 9 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 7 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 8 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 8 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 9 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
