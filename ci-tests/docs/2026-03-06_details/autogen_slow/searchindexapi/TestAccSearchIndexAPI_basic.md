# autogen_slow/searchindexapi/TestAccSearchIndexAPI_basic Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 8)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 01:07](#error-2026-02-24t0107110000) |  | dev | flaky_500 | 959.09s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 26 minutes
- 2026-02-06 PASS 36 minutes
- 2026-02-07 PASS 30 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 29 minutes
- 2026-02-10 PASS 24 minutes
- 2026-02-11 PASS 33 minutes
- 2026-02-12 PASS 24 minutes
- 2026-02-13 PASS 36 minutes
- 2026-02-14 PASS 22 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 23 minutes
- 2026-02-17 PASS 23 minutes
- 2026-02-18 PASS 22 minutes
- 2026-02-19 PASS 26 minutes
- 2026-02-20 PASS 28 minutes
- 2026-02-21 PASS 31 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 31 minutes
- 2026-02-24

### Error 2026-02-24T01:07:11+00:00
```
2026-02-24T01:07:11.3732202Z === RUN   TestAccSearchIndexAPI_basic
2026-02-24T01:07:11.3732752Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-7851778257667580273
2026-02-24T01:07:11.3733430Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-2207206617986808029
2026-02-24T01:07:11.3733925Z 2026/02/24 00:38:08 [DEBUG] Waiting for state to become: [IDLE]
2026-02-24T01:07:11.3734330Z 2026/02/24 00:41:08 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3734701Z 2026/02/24 00:42:08 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3735069Z 2026/02/24 00:42:18 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3735424Z 2026/02/24 00:43:19 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3735779Z 2026/02/24 00:43:29 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3736399Z 2026/02/24 00:44:29 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3736767Z 2026/02/24 00:44:39 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3737134Z 2026/02/24 00:45:39 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3737491Z 2026/02/24 00:45:50 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3737848Z 2026/02/24 00:46:50 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3738214Z 2026/02/24 00:47:00 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3738570Z 2026/02/24 00:48:01 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3738927Z 2026/02/24 00:48:11 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3739286Z 2026/02/24 00:49:11 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3739638Z 2026/02/24 00:49:22 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3739994Z 2026/02/24 00:50:24 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3740348Z 2026/02/24 00:50:34 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3740707Z 2026/02/24 00:51:36 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3741059Z 2026/02/24 00:51:46 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3741416Z 2026/02/24 00:52:47 [TRACE] Waiting 10s before next try
2026-02-24T01:07:11.3741773Z 2026/02/24 00:52:59 [TRACE] Waiting 1m0s before next try
2026-02-24T01:07:11.3742132Z     resource_test.go:21: 
2026-02-24T01:07:11.3743089Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:198
2026-02-24T01:07:11.3744970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:21
2026-02-24T01:07:11.3746081Z         	Error:      	Received unexpected error:
2026-02-24T01:07:11.3747750Z         	            	cluster(699cf2eb8dfec41eaa864f4d:test-acc-tf-c-2207206617986808029) loading sample data set error: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:07:11.3748648Z         	Test:       	TestAccSearchIndexAPI_basic
2026-02-24T01:07:11.3749003Z --- FAIL: TestAccSearchIndexAPI_basic (959.90s)
```

- 2026-02-25 PASS 21 minutes
- 2026-02-26 PASS 25 minutes
- 2026-02-27 PASS 21 minutes
- 2026-02-28 PASS 28 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 22 minutes
  - PASS 24 minutes
- 2026-03-03 PASS 34 minutes
- 2026-03-04 PASS 21 minutes
- 2026-03-05 PASS 26 minutes
- 2026-03-06 PASS 37 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 01:24](#error-2026-02-15t0124540000) |  | qa | 1533.01s
[2026-02-17 16:03](#error-2026-02-17t1603210000) |  | qa | 1526.08s
[2026-02-17 20:22](#error-2026-02-17t2022240000) |  | qa | 1383.04s
[2026-02-22 01:16](#error-2026-02-22t0116570000) |  | qa | 1151.10s
[2026-03-01 01:27](#error-2026-03-01t0127320000) |  | qa | 1100.02s
[2026-03-02 12:30](#error-2026-03-02t1230440000) |  | qa | 1414.04s
[2026-03-03 10:09](#error-2026-03-03t1009390000) |  | qa | 1282.06s

### Timeline
- 2026-02-04 PASS 26 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 19 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T01:24:54+00:00
```
2026-02-15T01:24:54.1932226Z === RUN   TestAccSearchIndexAPI_basic
2026-02-15T01:24:54.1932949Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5155457951293359405
2026-02-15T01:24:54.1933776Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-2299255714505639175
2026-02-15T01:24:54.1934388Z 2026/02/15 00:42:13 [DEBUG] Waiting for state to become: [IDLE]
2026-02-15T01:24:54.1934872Z 2026/02/15 00:45:13 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1935509Z 2026/02/15 00:46:13 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1935975Z 2026/02/15 00:46:23 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1936436Z 2026/02/15 00:47:23 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1936885Z 2026/02/15 00:47:34 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1937324Z 2026/02/15 00:48:34 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1937758Z 2026/02/15 00:48:44 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1938504Z 2026/02/15 00:49:44 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1938947Z 2026/02/15 00:49:54 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1939388Z 2026/02/15 00:50:54 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1939821Z 2026/02/15 00:51:05 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1940253Z 2026/02/15 00:52:05 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1940689Z 2026/02/15 00:52:15 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1941127Z 2026/02/15 00:53:15 [TRACE] Waiting 10s before next try
2026-02-15T01:24:54.1941564Z 2026/02/15 00:53:25 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1942055Z 2026/02/15 00:54:25 [DEBUG] Waiting for state to become: [COMPLETED]
2026-02-15T01:24:54.1942547Z 2026/02/15 00:55:26 [TRACE] Waiting 1m0s before next try
2026-02-15T01:24:54.1950768Z === CONT  TestAccSearchIndexAPI_basic
2026-02-15T01:24:54.1979698Z === NAME  TestAccSearchIndexAPI_basic
2026-02-15T01:24:54.1980750Z     resource_test.go:24: Error running post-test destroy, there may be dangling resources: search index (6991166188f4b5b22540066f/test-acc-tf-c-2299255714505639175/699119bbcef188b1a572d9f7) still exists
2026-02-15T01:24:54.1981613Z --- FAIL: TestAccSearchIndexAPI_basic (1533.08s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - FAIL 25 minutes

### Error 2026-02-17T16:03:21+00:00
```
2026-02-17T16:03:21.9163335Z === RUN   TestAccSearchIndexAPI_basic
2026-02-17T16:03:21.9163976Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-7341359849284937882
2026-02-17T16:03:21.9164688Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-1519459127951114801
2026-02-17T16:03:21.9165228Z 2026/02/17 15:24:18 [DEBUG] Waiting for state to become: [IDLE]
2026-02-17T16:03:21.9165652Z 2026/02/17 15:27:18 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9166211Z 2026/02/17 15:28:18 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9166597Z 2026/02/17 15:28:28 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9166973Z 2026/02/17 15:29:29 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9167347Z 2026/02/17 15:29:39 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9168046Z 2026/02/17 15:30:39 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9168413Z 2026/02/17 15:30:49 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9168784Z 2026/02/17 15:31:49 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9169147Z 2026/02/17 15:32:00 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9169518Z 2026/02/17 15:33:00 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9169884Z 2026/02/17 15:33:10 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9170262Z 2026/02/17 15:34:10 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9170760Z 2026/02/17 15:34:21 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9171146Z 2026/02/17 15:35:21 [TRACE] Waiting 10s before next try
2026-02-17T16:03:21.9171522Z 2026/02/17 15:35:31 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9171919Z 2026/02/17 15:36:31 [DEBUG] Waiting for state to become: [COMPLETED]
2026-02-17T16:03:21.9172317Z 2026/02/17 15:37:32 [TRACE] Waiting 1m0s before next try
2026-02-17T16:03:21.9179885Z === CONT  TestAccSearchIndexAPI_basic
2026-02-17T16:03:21.9210269Z === NAME  TestAccSearchIndexAPI_basic
2026-02-17T16:03:21.9211279Z     resource_test.go:24: Error running post-test destroy, there may be dangling resources: search index (6994881dc64c45bf0bbad77d/test-acc-tf-c-1519459127951114801/69948b79c64c45bf0bbb4bd4) still exists
2026-02-17T16:03:21.9212134Z --- FAIL: TestAccSearchIndexAPI_basic (1526.81s)
```

  - FAIL 23 minutes

### Error 2026-02-17T20:22:24+00:00
```
2026-02-17T20:22:24.3884094Z === RUN   TestAccSearchIndexAPI_basic
2026-02-17T20:22:24.3885154Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5920132817305394274
2026-02-17T20:22:24.3886321Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-3721231508258722541
2026-02-17T20:22:24.3887168Z 2026/02/17 19:46:48 [DEBUG] Waiting for state to become: [IDLE]
2026-02-17T20:22:24.3887853Z 2026/02/17 19:49:48 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3888826Z 2026/02/17 19:50:48 [TRACE] Waiting 10s before next try
2026-02-17T20:22:24.3889513Z 2026/02/17 19:50:58 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3890416Z 2026/02/17 19:51:59 [TRACE] Waiting 10s before next try
2026-02-17T20:22:24.3891059Z 2026/02/17 19:52:09 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3891696Z 2026/02/17 19:53:09 [TRACE] Waiting 10s before next try
2026-02-17T20:22:24.3892330Z 2026/02/17 19:53:19 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3892957Z 2026/02/17 19:54:19 [TRACE] Waiting 10s before next try
2026-02-17T20:22:24.3893595Z 2026/02/17 19:54:29 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3894225Z 2026/02/17 19:55:30 [TRACE] Waiting 10s before next try
2026-02-17T20:22:24.3894875Z 2026/02/17 19:55:40 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3895584Z 2026/02/17 19:56:40 [DEBUG] Waiting for state to become: [COMPLETED]
2026-02-17T20:22:24.3896289Z 2026/02/17 19:57:40 [TRACE] Waiting 1m0s before next try
2026-02-17T20:22:24.3909740Z === CONT  TestAccSearchIndexAPI_basic
2026-02-17T20:22:24.3932119Z === NAME  TestAccSearchIndexAPI_basic
2026-02-17T20:22:24.3936300Z     resource_test.go:24: Error running post-test destroy, there may be dangling resources: search index (6994c5a5e3d2a8bb0299cdd0/test-acc-tf-c-3721231508258722541/6994c87298b8813de67e5cb4) still exists
2026-02-17T20:22:24.3937856Z --- FAIL: TestAccSearchIndexAPI_basic (1383.37s)
```

- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:16:57+00:00
```
2026-02-22T01:16:57.8690471Z === RUN   TestAccSearchIndexAPI_basic
2026-02-22T01:16:57.8691272Z     resource_test.go:21: Creating execution project (1): test-acc-tf-p-5805901280700101522
2026-02-22T01:16:57.8692158Z     resource_test.go:21: Creating execution cluster: test-acc-tf-c-8475155293841306936
2026-02-22T01:16:57.8692812Z 2026/02/22 00:40:00 [DEBUG] Waiting for state to become: [IDLE]
2026-02-22T01:16:57.8693351Z 2026/02/22 00:43:00 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8696494Z 2026/02/22 00:44:00 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8697131Z 2026/02/22 00:44:10 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8697559Z 2026/02/22 00:45:11 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8697975Z 2026/02/22 00:45:21 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8698371Z 2026/02/22 00:46:21 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8698757Z 2026/02/22 00:46:31 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8699145Z 2026/02/22 00:47:31 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8699556Z 2026/02/22 00:47:41 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8699989Z 2026/02/22 00:48:41 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8700378Z 2026/02/22 00:48:52 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8700773Z 2026/02/22 00:49:52 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8701163Z 2026/02/22 00:50:02 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8701559Z 2026/02/22 00:51:02 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8701947Z 2026/02/22 00:51:12 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8702322Z 2026/02/22 00:52:12 [TRACE] Waiting 10s before next try
2026-02-22T01:16:57.8702700Z 2026/02/22 00:52:22 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8703129Z 2026/02/22 00:53:23 [DEBUG] Waiting for state to become: [COMPLETED]
2026-02-22T01:16:57.8703569Z 2026/02/22 00:54:23 [TRACE] Waiting 1m0s before next try
2026-02-22T01:16:57.8712200Z === CONT  TestAccSearchIndexAPI_basic
2026-02-22T01:16:57.8719666Z === NAME  TestAccSearchIndexAPI_basic
2026-02-22T01:16:57.8720785Z     resource_test.go:24: Error running post-test destroy, there may be dangling resources: search index (699a505cc26caab7eb26324b/test-acc-tf-c-8475155293841306936/699a53fcc26caab7eb26b74c) still exists
2026-02-22T01:16:57.8721697Z --- FAIL: TestAccSearchIndexAPI_basic (1151.95s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01

### Error 2026-03-01T01:27:32+00:00
```
2026-03-01T01:27:32.2222153Z === RUN   TestAccSearchIndexAPI_basic
2026-03-01T01:27:32.2223135Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-5667300702238909763
2026-03-01T01:27:32.2224269Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-1558300454499968194
2026-03-01T01:27:32.2225110Z 2026/03/01 00:43:37 [DEBUG] Waiting for state to become: [IDLE]
2026-03-01T01:27:32.2225800Z 2026/03/01 00:46:37 [TRACE] Waiting 1m0s before next try
2026-03-01T01:27:32.2226450Z 2026/03/01 00:47:38 [TRACE] Waiting 10s before next try
2026-03-01T01:27:32.2227389Z 2026/03/01 00:47:48 [TRACE] Waiting 1m0s before next try
2026-03-01T01:27:32.2228065Z 2026/03/01 00:48:48 [TRACE] Waiting 10s before next try
2026-03-01T01:27:32.2228615Z 2026/03/01 00:48:58 [TRACE] Waiting 1m0s before next try
2026-03-01T01:27:32.2229130Z 2026/03/01 00:49:58 [TRACE] Waiting 10s before next try
2026-03-01T01:27:32.2229543Z 2026/03/01 00:50:08 [TRACE] Waiting 1m0s before next try
2026-03-01T01:27:32.2229981Z 2026/03/01 00:51:08 [TRACE] Waiting 10s before next try
2026-03-01T01:27:32.2230379Z 2026/03/01 00:51:18 [TRACE] Waiting 1m0s before next try
2026-03-01T01:27:32.2230820Z 2026/03/01 00:52:18 [TRACE] Waiting 10s before next try
2026-03-01T01:27:32.2231365Z 2026/03/01 00:52:29 [TRACE] Waiting 1m0s before next try
2026-03-01T01:27:32.2231848Z 2026/03/01 00:53:29 [TRACE] Waiting 10s before next try
2026-03-01T01:27:32.2232337Z 2026/03/01 00:53:39 [TRACE] Waiting 1m0s before next try
2026-03-01T01:27:32.2232696Z 2026/03/01 00:54:39 [TRACE] Waiting 10s before next try
2026-03-01T01:27:32.2233181Z 2026/03/01 00:54:49 [TRACE] Waiting 1m0s before next try
2026-03-01T01:27:32.2233553Z 2026/03/01 00:55:49 [TRACE] Waiting 10s before next try
2026-03-01T01:27:32.2234031Z 2026/03/01 00:55:59 [TRACE] Waiting 1m0s before next try
2026-03-01T01:27:32.2234397Z 2026/03/01 00:56:59 [TRACE] Waiting 10s before next try
2026-03-01T01:27:32.2234895Z 2026/03/01 00:57:09 [TRACE] Waiting 1m0s before next try
2026-03-01T01:27:32.2235309Z 2026/03/01 00:58:10 [DEBUG] Waiting for state to become: [COMPLETED]
2026-03-01T01:27:32.2235841Z 2026/03/01 00:59:10 [TRACE] Waiting 1m0s before next try
2026-03-01T01:27:32.2245233Z === CONT  TestAccSearchIndexAPI_basic
2026-03-01T01:27:32.2253577Z === NAME  TestAccSearchIndexAPI_basic
2026-03-01T01:27:32.2254875Z     resource_test.go:25: Error running post-test destroy, there may be dangling resources: search index (69a38bb617b2c5dfb1d16cfb/test-acc-tf-c-1558300454499968194/69a38f9b75e18691c08c45b0) still exists
2026-03-01T01:27:32.2255849Z --- FAIL: TestAccSearchIndexAPI_basic (1100.18s)
```

- 2026-03-02

### Error 2026-03-02T12:30:44+00:00
```
2026-03-02T12:30:44.3923745Z === RUN   TestAccSearchIndexAPI_basic
2026-03-02T12:30:44.3924656Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-7495204121972975001
2026-03-02T12:30:44.3926328Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-5453985973535775606
2026-03-02T12:30:44.3927236Z 2026/03/02 11:57:39 [DEBUG] Waiting for state to become: [IDLE]
2026-03-02T12:30:44.3927941Z 2026/03/02 12:00:39 [TRACE] Waiting 1m0s before next try
2026-03-02T12:30:44.3928585Z 2026/03/02 12:01:39 [TRACE] Waiting 10s before next try
2026-03-02T12:30:44.3929172Z 2026/03/02 12:01:50 [TRACE] Waiting 1m0s before next try
2026-03-02T12:30:44.3929536Z 2026/03/02 12:02:50 [TRACE] Waiting 10s before next try
2026-03-02T12:30:44.3929889Z 2026/03/02 12:03:00 [TRACE] Waiting 1m0s before next try
2026-03-02T12:30:44.3930261Z 2026/03/02 12:04:00 [TRACE] Waiting 10s before next try
2026-03-02T12:30:44.3930875Z 2026/03/02 12:04:10 [TRACE] Waiting 1m0s before next try
2026-03-02T12:30:44.3931238Z 2026/03/02 12:05:10 [TRACE] Waiting 10s before next try
2026-03-02T12:30:44.3931598Z 2026/03/02 12:05:20 [TRACE] Waiting 1m0s before next try
2026-03-02T12:30:44.3931952Z 2026/03/02 12:06:21 [TRACE] Waiting 10s before next try
2026-03-02T12:30:44.3932299Z 2026/03/02 12:06:31 [TRACE] Waiting 1m0s before next try
2026-03-02T12:30:44.3932647Z 2026/03/02 12:07:31 [TRACE] Waiting 10s before next try
2026-03-02T12:30:44.3932991Z 2026/03/02 12:07:41 [TRACE] Waiting 1m0s before next try
2026-03-02T12:30:44.3933388Z 2026/03/02 12:08:41 [DEBUG] Waiting for state to become: [COMPLETED]
2026-03-02T12:30:44.3933780Z 2026/03/02 12:09:42 [TRACE] Waiting 1m0s before next try
2026-03-02T12:30:44.3941908Z === CONT  TestAccSearchIndexAPI_basic
2026-03-02T12:30:44.3977395Z === NAME  TestAccSearchIndexAPI_basic
2026-03-02T12:30:44.3978475Z     resource_test.go:25: Error running post-test destroy, there may be dangling resources: search index (69a57b310b79a8d7dc99dd5c/test-acc-tf-c-5453985973535775606/69a57e430b79a8d7dc9a1076) still exists
2026-03-02T12:30:44.3979545Z --- FAIL: TestAccSearchIndexAPI_basic (1414.42s)
```

- 2026-03-03

### Error 2026-03-03T10:09:39+00:00
```
2026-03-03T10:09:39.4780680Z === RUN   TestAccSearchIndexAPI_basic
2026-03-03T10:09:39.4781481Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-8949142370795849339
2026-03-03T10:09:39.4782337Z     resource_test.go:22: Creating execution cluster: test-acc-tf-c-3428198865123856829
2026-03-03T10:09:39.4782927Z 2026/03/03 09:31:30 [DEBUG] Waiting for state to become: [IDLE]
2026-03-03T10:09:39.4783444Z 2026/03/03 09:34:30 [TRACE] Waiting 1m0s before next try
2026-03-03T10:09:39.4784339Z 2026/03/03 09:35:31 [TRACE] Waiting 10s before next try
2026-03-03T10:09:39.4784847Z 2026/03/03 09:35:41 [TRACE] Waiting 1m0s before next try
2026-03-03T10:09:39.4785229Z 2026/03/03 09:36:41 [TRACE] Waiting 10s before next try
2026-03-03T10:09:39.4785742Z 2026/03/03 09:36:51 [TRACE] Waiting 1m0s before next try
2026-03-03T10:09:39.4786119Z 2026/03/03 09:37:51 [TRACE] Waiting 10s before next try
2026-03-03T10:09:39.4786600Z 2026/03/03 09:38:01 [TRACE] Waiting 1m0s before next try
2026-03-03T10:09:39.4787256Z 2026/03/03 09:39:02 [TRACE] Waiting 10s before next try
2026-03-03T10:09:39.4787692Z 2026/03/03 09:39:12 [TRACE] Waiting 1m0s before next try
2026-03-03T10:09:39.4788125Z 2026/03/03 09:40:12 [TRACE] Waiting 10s before next try
2026-03-03T10:09:39.4788567Z 2026/03/03 09:40:22 [TRACE] Waiting 1m0s before next try
2026-03-03T10:09:39.4788990Z 2026/03/03 09:41:22 [TRACE] Waiting 10s before next try
2026-03-03T10:09:39.4789464Z 2026/03/03 09:41:32 [TRACE] Waiting 1m0s before next try
2026-03-03T10:09:39.4789859Z 2026/03/03 09:42:32 [TRACE] Waiting 10s before next try
2026-03-03T10:09:39.4790339Z 2026/03/03 09:42:43 [TRACE] Waiting 1m0s before next try
2026-03-03T10:09:39.4790765Z 2026/03/03 09:43:43 [DEBUG] Waiting for state to become: [COMPLETED]
2026-03-03T10:09:39.4791305Z 2026/03/03 09:44:43 [TRACE] Waiting 1m0s before next try
2026-03-03T10:09:39.4803376Z === CONT  TestAccSearchIndexAPI_basic
2026-03-03T10:09:39.4840678Z === NAME  TestAccSearchIndexAPI_basic
2026-03-03T10:09:39.4842079Z     resource_test.go:25: Error running post-test destroy, there may be dangling resources: search index (69a6aa6f61f800e9358a4c4b/test-acc-tf-c-3428198865123856829/69a6adc861f800e9358b53b6) still exists
2026-03-03T10:09:39.4843105Z --- FAIL: TestAccSearchIndexAPI_basic (1282.58s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
