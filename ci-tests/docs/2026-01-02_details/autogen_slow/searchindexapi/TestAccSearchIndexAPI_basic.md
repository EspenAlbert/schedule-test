# autogen_slow/searchindexapi/TestAccSearchIndexAPI_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-05 02:37](#error-2025-12-05t0237340000) |  | dev | timeout | 3603.01s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 24 minutes
- 2025-12-05

### Error 2025-12-05T02:37:34+00:00
```
2025-12-05T02:37:34.2057865Z === RUN   TestAccSearchIndexAPI_basic
2025-12-05T02:37:34.2058621Z     resource_test.go:21: Creating execution project: test-acc-tf-p-99340080372395218
2025-12-05T02:37:34.2059391Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-3468312871960793297
2025-12-05T02:37:34.2059902Z 2025/12/05 00:32:17 [DEBUG] Waiting for state to become: [IDLE]
2025-12-05T02:37:34.2060403Z 2025/12/05 00:35:17 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2060818Z 2025/12/05 00:36:17 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2061243Z 2025/12/05 00:36:27 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2061665Z 2025/12/05 00:37:27 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2062059Z 2025/12/05 00:37:38 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2062487Z 2025/12/05 00:38:38 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2062870Z 2025/12/05 00:38:48 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2063300Z 2025/12/05 00:39:48 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2063937Z 2025/12/05 00:39:58 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2064355Z 2025/12/05 00:40:58 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2064828Z 2025/12/05 00:41:08 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2065195Z 2025/12/05 00:42:09 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2065643Z 2025/12/05 00:42:19 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2065990Z 2025/12/05 00:43:19 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2066420Z 2025/12/05 00:43:29 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2066752Z 2025/12/05 00:44:29 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2067189Z 2025/12/05 00:44:39 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2067517Z 2025/12/05 00:45:39 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2067940Z 2025/12/05 00:45:50 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2068273Z 2025/12/05 00:46:50 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2068691Z 2025/12/05 00:47:00 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2069051Z 2025/12/05 00:48:00 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2069432Z 2025/12/05 00:48:10 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2069819Z 2025/12/05 00:49:10 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2070149Z 2025/12/05 00:49:21 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2070577Z 2025/12/05 00:50:21 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2070900Z 2025/12/05 00:50:31 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2071324Z 2025/12/05 00:51:31 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2071657Z 2025/12/05 00:51:41 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2072082Z 2025/12/05 00:52:41 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2072410Z 2025/12/05 00:52:51 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2072846Z 2025/12/05 00:53:52 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2073389Z 2025/12/05 00:54:02 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2074067Z 2025/12/05 00:55:02 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2074516Z 2025/12/05 00:55:12 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2074853Z 2025/12/05 00:56:12 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2075283Z 2025/12/05 00:56:22 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2075618Z 2025/12/05 00:57:22 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2076044Z 2025/12/05 00:57:33 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2076372Z 2025/12/05 00:58:33 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2076766Z 2025/12/05 00:58:43 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2077123Z 2025/12/05 00:59:43 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2077475Z 2025/12/05 00:59:53 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2078022Z 2025/12/05 01:00:53 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2078471Z 2025/12/05 01:01:03 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2078805Z 2025/12/05 01:02:04 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2079188Z 2025/12/05 01:02:14 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2079573Z 2025/12/05 01:03:14 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2079899Z 2025/12/05 01:03:24 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2080334Z 2025/12/05 01:04:24 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2080665Z 2025/12/05 01:04:34 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2081097Z 2025/12/05 01:05:34 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2081428Z 2025/12/05 01:05:45 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2081854Z 2025/12/05 01:06:45 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2082183Z 2025/12/05 01:06:55 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2082619Z 2025/12/05 01:07:55 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2082949Z 2025/12/05 01:08:05 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2083365Z 2025/12/05 01:09:05 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2083893Z 2025/12/05 01:09:15 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2084222Z 2025/12/05 01:10:16 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2084656Z 2025/12/05 01:10:26 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2084997Z 2025/12/05 01:11:26 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2085404Z 2025/12/05 01:11:36 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2085762Z 2025/12/05 01:12:36 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2086144Z 2025/12/05 01:12:46 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2086519Z 2025/12/05 01:13:46 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2086852Z 2025/12/05 01:13:57 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2087289Z 2025/12/05 01:14:57 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2087641Z 2025/12/05 01:15:07 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2088084Z 2025/12/05 01:16:07 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2088415Z 2025/12/05 01:16:17 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2088850Z 2025/12/05 01:17:17 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2089176Z 2025/12/05 01:17:27 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2089614Z 2025/12/05 01:18:28 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2089942Z 2025/12/05 01:18:38 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2090372Z 2025/12/05 01:19:38 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2090703Z 2025/12/05 01:19:48 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2091128Z 2025/12/05 01:20:48 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2091462Z 2025/12/05 01:20:58 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2091889Z 2025/12/05 01:21:58 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2092362Z 2025/12/05 01:22:09 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2092798Z 2025/12/05 01:23:09 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2093131Z 2025/12/05 01:23:19 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2093549Z 2025/12/05 01:24:19 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2094059Z 2025/12/05 01:24:29 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2094496Z 2025/12/05 01:25:29 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2094866Z 2025/12/05 01:25:39 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2095200Z 2025/12/05 01:26:39 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2095539Z 2025/12/05 01:26:50 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2095968Z 2025/12/05 01:27:50 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2096304Z 2025/12/05 01:28:00 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2096764Z 2025/12/05 01:29:00 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2097102Z 2025/12/05 01:29:10 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2097428Z 2025/12/05 01:30:10 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2097761Z 2025/12/05 01:30:20 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2098200Z 2025/12/05 01:31:21 [TRACE] Waiting 10s before next try
2025-12-05T02:37:34.2098533Z 2025/12/05 01:31:31 [TRACE] Waiting 1m0s before next try
2025-12-05T02:37:34.2098891Z 2025/12/05 01:32:17 [WARN] WaitForState timeout after 1h0m0s
2025-12-05T02:37:34.2099292Z 2025/12/05 01:32:17 [WARN] WaitForState starting 30s refresh grace period
2025-12-05T02:37:34.2099692Z     resource_test.go:21: 
2025-12-05T02:37:34.2100608Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:47
2025-12-05T02:37:34.2102493Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:137
2025-12-05T02:37:34.2104598Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:21
2025-12-05T02:37:34.2105371Z         	Error:      	Received unexpected error:
2025-12-05T02:37:34.2106269Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-12-05T02:37:34.2106807Z         	Test:       	TestAccSearchIndexAPI_basic
2025-12-05T02:37:34.2107816Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3468312871960793297, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-12-05T02:37:34.2108510Z --- FAIL: TestAccSearchIndexAPI_basic (3603.13s)
```

- 2025-12-06 PASS 24 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 24 minutes
- 2025-12-09 PASS 20 minutes
- 2025-12-10
  - PASS 22 minutes
  - PASS 19 minutes
- 2025-12-11 PASS 23 minutes
- 2025-12-12 PASS 19 minutes
- 2025-12-13 PASS 19 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 19 minutes
- 2025-12-16 PASS 18 minutes
- 2025-12-17 PASS 24 minutes
- 2025-12-18 PASS 17 minutes
- 2025-12-19 PASS 24 minutes
- 2025-12-20 PASS 21 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 22 minutes
- 2025-12-23 PASS 27 minutes
- 2025-12-24 PASS 18 minutes
- 2025-12-25 PASS 23 minutes
- 2025-12-26 PASS 25 minutes
- 2025-12-27 PASS 18 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 24 minutes
- 2025-12-31 PASS 23 minutes
- 2026-01-01 PASS 21 minutes
- 2026-01-02 PASS 23 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 21 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 16 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 20 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 19 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 21 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
