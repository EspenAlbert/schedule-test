# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-22 00:26](#error-2025-11-22t0026490000) |  | dev | timeout | 1436.03s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 7 seconds
- 2025-10-30 PASS 12 minutes
- 2025-10-31 PASS 6 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 9 seconds
- 2025-11-04 PASS 12 minutes
- 2025-11-05
  - PASS 8 seconds
  - PASS 5 seconds
- 2025-11-06 PASS 13 minutes
- 2025-11-07 PASS 9 seconds
- 2025-11-08 PASS 40 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 7 seconds
- 2025-11-11 PASS 12 minutes
- 2025-11-12 PASS 9 seconds
- 2025-11-13 PASS 16 minutes
- 2025-11-14 PASS 7 seconds
- 2025-11-15 PASS 10 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 7 seconds
- 2025-11-18 PASS 12 minutes
- 2025-11-19 PASS 9 seconds
- 2025-11-20 PASS 12 minutes
- 2025-11-21 PASS 9 seconds
- 2025-11-22

### Error 2025-11-22T00:26:49+00:00
```
2025-11-22T00:26:49.8645278Z === RUN   TestAccSearchIndex_basic
2025-11-22T00:26:49.8646492Z     resource_search_index_test.go:16: Creating execution project: test-acc-tf-p-2390641807553494048
2025-11-22T00:26:51.9180424Z     resource_search_index_test.go:16: Creating execution cluster: test-acc-tf-c-5088840315499119094
2025-11-22T00:26:52.5679795Z 2025/11/22 00:26:52 [DEBUG] Waiting for state to become: [IDLE]
2025-11-22T00:29:52.9318318Z 2025/11/22 00:29:52 [TRACE] Waiting 1m0s before next try
2025-11-22T00:30:53.3016950Z 2025/11/22 00:30:53 [TRACE] Waiting 10s before next try
2025-11-22T00:31:03.5646539Z 2025/11/22 00:31:03 [TRACE] Waiting 1m0s before next try
2025-11-22T00:32:03.9509422Z 2025/11/22 00:32:03 [TRACE] Waiting 10s before next try
2025-11-22T00:32:14.1709968Z 2025/11/22 00:32:14 [TRACE] Waiting 1m0s before next try
2025-11-22T00:33:14.5605799Z 2025/11/22 00:33:14 [TRACE] Waiting 10s before next try
2025-11-22T00:33:24.7677319Z 2025/11/22 00:33:24 [TRACE] Waiting 1m0s before next try
2025-11-22T00:34:25.1471880Z 2025/11/22 00:34:25 [TRACE] Waiting 10s before next try
2025-11-22T00:34:35.3503459Z 2025/11/22 00:34:35 [TRACE] Waiting 1m0s before next try
2025-11-22T00:35:35.6855182Z 2025/11/22 00:35:35 [TRACE] Waiting 10s before next try
2025-11-22T00:35:46.1575696Z 2025/11/22 00:35:46 [DEBUG] Waiting for state to become: [COMPLETED]
2025-11-22T00:36:46.5059194Z 2025/11/22 00:36:46 [TRACE] Waiting 1m0s before next try
2025-11-22T00:37:46.8509196Z 2025/11/22 00:37:46 [TRACE] Waiting 10s before next try
2025-11-22T00:37:57.0479823Z 2025/11/22 00:37:57 [TRACE] Waiting 1m0s before next try
2025-11-22T00:38:57.3819919Z 2025/11/22 00:38:57 [TRACE] Waiting 10s before next try
2025-11-22T00:39:07.5520402Z 2025/11/22 00:39:07 [TRACE] Waiting 1m0s before next try
2025-11-22T00:40:07.9176688Z 2025/11/22 00:40:07 [TRACE] Waiting 10s before next try
2025-11-22T00:40:18.0978363Z 2025/11/22 00:40:18 [TRACE] Waiting 1m0s before next try
2025-11-22T00:41:18.4238525Z 2025/11/22 00:41:18 [TRACE] Waiting 10s before next try
2025-11-22T00:41:28.5939827Z 2025/11/22 00:41:28 [TRACE] Waiting 1m0s before next try
2025-11-22T00:42:28.9101517Z 2025/11/22 00:42:28 [TRACE] Waiting 10s before next try
2025-11-22T00:42:39.0849809Z 2025/11/22 00:42:39 [TRACE] Waiting 1m0s before next try
2025-11-22T00:43:39.4315441Z 2025/11/22 00:43:39 [TRACE] Waiting 10s before next try
2025-11-22T00:43:49.6007627Z 2025/11/22 00:43:49 [TRACE] Waiting 1m0s before next try
2025-11-22T00:44:49.9230184Z 2025/11/22 00:44:49 [TRACE] Waiting 10s before next try
2025-11-22T00:45:00.1266321Z 2025/11/22 00:45:00 [TRACE] Waiting 1m0s before next try
2025-11-22T00:46:00.4773962Z 2025/11/22 00:46:00 [TRACE] Waiting 10s before next try
2025-11-22T00:46:10.6543198Z 2025/11/22 00:46:10 [TRACE] Waiting 1m0s before next try
2025-11-22T00:47:10.9719736Z 2025/11/22 00:47:10 [TRACE] Waiting 10s before next try
2025-11-22T00:47:21.1440860Z 2025/11/22 00:47:21 [TRACE] Waiting 1m0s before next try
2025-11-22T00:48:21.4819545Z 2025/11/22 00:48:21 [TRACE] Waiting 10s before next try
2025-11-22T00:48:31.6503651Z 2025/11/22 00:48:31 [TRACE] Waiting 1m0s before next try
2025-11-22T00:49:31.9676239Z 2025/11/22 00:49:31 [TRACE] Waiting 10s before next try
2025-11-22T00:49:42.1321932Z 2025/11/22 00:49:42 [TRACE] Waiting 1m0s before next try
2025-11-22T00:50:42.5717757Z 2025/11/22 00:50:42 [TRACE] Waiting 10s before next try
2025-11-22T00:50:46.1603667Z 2025/11/22 00:50:46 [WARN] WaitForState timeout after 15m0s
2025-11-22T00:50:46.1604472Z 2025/11/22 00:50:46 [WARN] WaitForState starting 30s refresh grace period
2025-11-22T00:50:46.1607534Z     resource_search_index_test.go:16: 
2025-11-22T00:50:46.1609527Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:141
2025-11-22T00:50:46.1613016Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:198
2025-11-22T00:50:46.1616961Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:16
2025-11-22T00:50:46.1618686Z         	Error:      	Received unexpected error:
2025-11-22T00:50:46.1620485Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-11-22T00:50:46.1621510Z         	Test:       	TestAccSearchIndex_basic
2025-11-22T00:50:46.1622069Z --- FAIL: TestAccSearchIndex_basic (1436.30s)
```

- 2025-11-23: MISSING
- 2025-11-24 PASS 9 seconds
- 2025-11-25 PASS 15 minutes
- 2025-11-26 PASS 9 seconds
- 2025-11-27 PASS 15 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 7 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 8 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 8 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 7 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 8 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
