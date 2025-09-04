# search_index/searchindex/TestMigSearchIndex_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 6)
Success rate: 84.21%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-23 00:26](#error-2025-08-23t0026370000) |  | dev | timeout | 1564.07s
[2025-08-25 00:28](#error-2025-08-25t0028480000) |  | dev | timeout | 1637.05s
[2025-08-28 00:27](#error-2025-08-28t0027140000) |  | dev | timeout | 1495.07s
[2025-09-01 00:30](#error-2025-09-01t0030150000) |  | dev | timeout | 3602.06s
[2025-09-01 05:58](#error-2025-09-01t0558030000) |  | dev | timeout | 3602.07s
[2025-09-01 07:57](#error-2025-09-01t0757080000) |  | dev | timeout | 1986.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 13 minutes
- 2025-08-07 PASS 18 minutes
- 2025-08-08 PASS 13 minutes
- 2025-08-09 PASS 15 minutes
- 2025-08-10 PASS 32 minutes
- 2025-08-11 PASS 37 minutes
- 2025-08-12 PASS 12 minutes
- 2025-08-13 PASS 14 minutes
- 2025-08-14 PASS 13 minutes
- 2025-08-15 PASS 11 minutes
- 2025-08-16 PASS 40 minutes
- 2025-08-17 PASS 24 minutes
- 2025-08-18 PASS 13 minutes
- 2025-08-19 PASS 13 minutes
- 2025-08-20
  - PASS 12 minutes
  - PASS 16 minutes
- 2025-08-21 PASS 13 minutes
- 2025-08-22 PASS 10 minutes
- 2025-08-23

### Error 2025-08-23T00:26:37+00:00
```
2025-08-23T00:26:37.4874266Z === RUN   TestMigSearchIndex_basic
2025-08-23T00:26:37.4881665Z     resource_search_index_migration_test.go:11: Creating execution project: test-acc-tf-p-1540960262367348708
2025-08-23T00:26:39.5149044Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-7034909334575573742
2025-08-23T00:26:40.2820711Z 2025/08/23 00:26:40 [DEBUG] Waiting for state to become: [IDLE]
2025-08-23T00:29:40.4234448Z 2025/08/23 00:29:40 [TRACE] Waiting 1m0s before next try
2025-08-23T00:30:40.5490040Z 2025/08/23 00:30:40 [TRACE] Waiting 10s before next try
2025-08-23T00:30:50.6357413Z 2025/08/23 00:30:50 [TRACE] Waiting 1m0s before next try
2025-08-23T00:31:50.7903462Z 2025/08/23 00:31:50 [TRACE] Waiting 10s before next try
2025-08-23T00:32:00.8976655Z 2025/08/23 00:32:00 [TRACE] Waiting 1m0s before next try
2025-08-23T00:33:01.1194669Z 2025/08/23 00:33:01 [TRACE] Waiting 10s before next try
2025-08-23T00:33:11.2303467Z 2025/08/23 00:33:11 [TRACE] Waiting 1m0s before next try
2025-08-23T00:34:11.3773183Z 2025/08/23 00:34:11 [TRACE] Waiting 10s before next try
2025-08-23T00:34:21.4868484Z 2025/08/23 00:34:21 [TRACE] Waiting 1m0s before next try
2025-08-23T00:35:21.6016816Z 2025/08/23 00:35:21 [TRACE] Waiting 10s before next try
2025-08-23T00:35:31.7069138Z 2025/08/23 00:35:31 [TRACE] Waiting 1m0s before next try
2025-08-23T00:36:31.8527091Z 2025/08/23 00:36:31 [TRACE] Waiting 10s before next try
2025-08-23T00:36:41.9565200Z 2025/08/23 00:36:41 [TRACE] Waiting 1m0s before next try
2025-08-23T00:37:42.2100270Z 2025/08/23 00:37:42 [DEBUG] Waiting for state to become: [COMPLETED]
2025-08-23T00:38:42.3615693Z 2025/08/23 00:38:42 [TRACE] Waiting 1m0s before next try
2025-08-23T00:39:42.4495452Z 2025/08/23 00:39:42 [TRACE] Waiting 10s before next try
2025-08-23T00:39:52.5256341Z 2025/08/23 00:39:52 [TRACE] Waiting 1m0s before next try
2025-08-23T00:40:52.7100880Z 2025/08/23 00:40:52 [TRACE] Waiting 10s before next try
2025-08-23T00:41:02.7772909Z 2025/08/23 00:41:02 [TRACE] Waiting 1m0s before next try
2025-08-23T00:42:02.9079254Z 2025/08/23 00:42:02 [TRACE] Waiting 10s before next try
2025-08-23T00:42:12.9840052Z 2025/08/23 00:42:12 [TRACE] Waiting 1m0s before next try
2025-08-23T00:43:13.1247936Z 2025/08/23 00:43:13 [TRACE] Waiting 10s before next try
2025-08-23T00:43:23.1894375Z 2025/08/23 00:43:23 [TRACE] Waiting 1m0s before next try
2025-08-23T00:44:23.2985664Z 2025/08/23 00:44:23 [TRACE] Waiting 10s before next try
2025-08-23T00:44:33.3614018Z 2025/08/23 00:44:33 [TRACE] Waiting 1m0s before next try
2025-08-23T00:45:33.4682794Z 2025/08/23 00:45:33 [TRACE] Waiting 10s before next try
2025-08-23T00:45:43.5450793Z 2025/08/23 00:45:43 [TRACE] Waiting 1m0s before next try
2025-08-23T00:46:43.6711892Z 2025/08/23 00:46:43 [TRACE] Waiting 10s before next try
2025-08-23T00:46:53.7383182Z 2025/08/23 00:46:53 [TRACE] Waiting 1m0s before next try
2025-08-23T00:47:53.8280117Z 2025/08/23 00:47:53 [TRACE] Waiting 10s before next try
2025-08-23T00:48:03.9001804Z 2025/08/23 00:48:03 [TRACE] Waiting 1m0s before next try
2025-08-23T00:49:04.1187412Z 2025/08/23 00:49:04 [TRACE] Waiting 10s before next try
2025-08-23T00:49:14.2200572Z 2025/08/23 00:49:14 [TRACE] Waiting 1m0s before next try
2025-08-23T00:50:14.4047241Z 2025/08/23 00:50:14 [TRACE] Waiting 10s before next try
2025-08-23T00:50:24.4729910Z 2025/08/23 00:50:24 [TRACE] Waiting 1m0s before next try
2025-08-23T00:51:24.6326409Z 2025/08/23 00:51:24 [TRACE] Waiting 10s before next try
2025-08-23T00:51:34.7157381Z 2025/08/23 00:51:34 [TRACE] Waiting 1m0s before next try
2025-08-23T00:52:34.9160122Z 2025/08/23 00:52:34 [TRACE] Waiting 10s before next try
2025-08-23T00:52:42.2138824Z 2025/08/23 00:52:42 [WARN] WaitForState timeout after 15m0s
2025-08-23T00:52:42.2139749Z 2025/08/23 00:52:42 [WARN] WaitForState starting 30s refresh grace period
2025-08-23T00:52:42.2144238Z     resource_search_index_migration_test.go:11: 
2025-08-23T00:52:42.2146922Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:134
2025-08-23T00:52:42.2150716Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:150
2025-08-23T00:52:42.2154554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2025-08-23T00:52:42.2156179Z         	Error:      	Received unexpected error:
2025-08-23T00:52:42.2157919Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-08-23T00:52:42.2158750Z         	Test:       	TestMigSearchIndex_basic
2025-08-23T00:52:42.2159284Z --- FAIL: TestMigSearchIndex_basic (1564.73s)
```

- 2025-08-24 PASS 12 minutes
- 2025-08-25

### Error 2025-08-25T00:28:48+00:00
```
2025-08-25T00:28:48.8499350Z === RUN   TestMigSearchIndex_basic
2025-08-25T00:28:48.8501812Z     resource_search_index_migration_test.go:11: Creating execution project: test-acc-tf-p-5638804934498128452
2025-08-25T00:28:52.6263794Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-8912540277759118768
2025-08-25T00:28:53.2347856Z 2025/08/25 00:28:53 [DEBUG] Waiting for state to become: [IDLE]
2025-08-25T00:31:53.4812679Z 2025/08/25 00:31:53 [TRACE] Waiting 1m0s before next try
2025-08-25T00:32:53.7021280Z 2025/08/25 00:32:53 [TRACE] Waiting 10s before next try
2025-08-25T00:33:03.8275815Z 2025/08/25 00:33:03 [TRACE] Waiting 1m0s before next try
2025-08-25T00:34:04.0543341Z 2025/08/25 00:34:04 [TRACE] Waiting 10s before next try
2025-08-25T00:34:14.2068491Z 2025/08/25 00:34:14 [TRACE] Waiting 1m0s before next try
2025-08-25T00:35:14.4628406Z 2025/08/25 00:35:14 [TRACE] Waiting 10s before next try
2025-08-25T00:35:24.5918168Z 2025/08/25 00:35:24 [TRACE] Waiting 1m0s before next try
2025-08-25T00:36:24.8164989Z 2025/08/25 00:36:24 [TRACE] Waiting 10s before next try
2025-08-25T00:36:34.9471783Z 2025/08/25 00:36:34 [TRACE] Waiting 1m0s before next try
2025-08-25T00:37:35.1387989Z 2025/08/25 00:37:35 [TRACE] Waiting 10s before next try
2025-08-25T00:37:45.2813227Z 2025/08/25 00:37:45 [TRACE] Waiting 1m0s before next try
2025-08-25T00:38:45.4841315Z 2025/08/25 00:38:45 [TRACE] Waiting 10s before next try
2025-08-25T00:38:55.6167706Z 2025/08/25 00:38:55 [TRACE] Waiting 1m0s before next try
2025-08-25T00:39:55.8201530Z 2025/08/25 00:39:55 [TRACE] Waiting 10s before next try
2025-08-25T00:40:05.9592677Z 2025/08/25 00:40:05 [TRACE] Waiting 1m0s before next try
2025-08-25T00:41:06.3191648Z 2025/08/25 00:41:06 [DEBUG] Waiting for state to become: [COMPLETED]
2025-08-25T00:42:06.5582187Z 2025/08/25 00:42:06 [TRACE] Waiting 1m0s before next try
2025-08-25T00:43:06.7291408Z 2025/08/25 00:43:06 [TRACE] Waiting 10s before next try
2025-08-25T00:43:16.8258677Z 2025/08/25 00:43:16 [TRACE] Waiting 1m0s before next try
2025-08-25T00:44:16.9774288Z 2025/08/25 00:44:16 [TRACE] Waiting 10s before next try
2025-08-25T00:44:27.0765167Z 2025/08/25 00:44:27 [TRACE] Waiting 1m0s before next try
2025-08-25T00:45:27.2348654Z 2025/08/25 00:45:27 [TRACE] Waiting 10s before next try
2025-08-25T00:45:37.3269937Z 2025/08/25 00:45:37 [TRACE] Waiting 1m0s before next try
2025-08-25T00:46:37.4939153Z 2025/08/25 00:46:37 [TRACE] Waiting 10s before next try
2025-08-25T00:46:47.6114722Z 2025/08/25 00:46:47 [TRACE] Waiting 1m0s before next try
2025-08-25T00:47:47.7793593Z 2025/08/25 00:47:47 [TRACE] Waiting 10s before next try
2025-08-25T00:47:57.8781659Z 2025/08/25 00:47:57 [TRACE] Waiting 1m0s before next try
2025-08-25T00:48:58.0265031Z 2025/08/25 00:48:58 [TRACE] Waiting 10s before next try
2025-08-25T00:49:08.1273471Z 2025/08/25 00:49:08 [TRACE] Waiting 1m0s before next try
2025-08-25T00:50:08.2977891Z 2025/08/25 00:50:08 [TRACE] Waiting 10s before next try
2025-08-25T00:50:18.3967966Z 2025/08/25 00:50:18 [TRACE] Waiting 1m0s before next try
2025-08-25T00:51:18.5745788Z 2025/08/25 00:51:18 [TRACE] Waiting 10s before next try
2025-08-25T00:51:28.6753430Z 2025/08/25 00:51:28 [TRACE] Waiting 1m0s before next try
2025-08-25T00:52:28.8404468Z 2025/08/25 00:52:28 [TRACE] Waiting 10s before next try
2025-08-25T00:52:38.9539330Z 2025/08/25 00:52:38 [TRACE] Waiting 1m0s before next try
2025-08-25T00:53:39.1407436Z 2025/08/25 00:53:39 [TRACE] Waiting 10s before next try
2025-08-25T00:53:49.2327426Z 2025/08/25 00:53:49 [TRACE] Waiting 1m0s before next try
2025-08-25T00:54:49.4671074Z 2025/08/25 00:54:49 [TRACE] Waiting 10s before next try
2025-08-25T00:54:59.5642098Z 2025/08/25 00:54:59 [TRACE] Waiting 1m0s before next try
2025-08-25T00:55:59.6961753Z 2025/08/25 00:55:59 [TRACE] Waiting 10s before next try
2025-08-25T00:56:06.3193807Z 2025/08/25 00:56:06 [WARN] WaitForState timeout after 15m0s
2025-08-25T00:56:06.3194884Z 2025/08/25 00:56:06 [WARN] WaitForState starting 30s refresh grace period
2025-08-25T00:56:06.3198457Z     resource_search_index_migration_test.go:11: 
2025-08-25T00:56:06.3200200Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:134
2025-08-25T00:56:06.3203884Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:150
2025-08-25T00:56:06.3208258Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2025-08-25T00:56:06.3209848Z         	Error:      	Received unexpected error:
2025-08-25T00:56:06.3211659Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-08-25T00:56:06.3212664Z         	Test:       	TestMigSearchIndex_basic
2025-08-25T00:56:06.3213222Z --- FAIL: TestMigSearchIndex_basic (1637.47s)
```

- 2025-08-26 PASS 20 minutes
- 2025-08-27 PASS 21 minutes
- 2025-08-28

### Error 2025-08-28T00:27:14+00:00
```
2025-08-28T00:27:14.6884056Z === RUN   TestMigSearchIndex_basic
2025-08-28T00:27:14.6887185Z     resource_search_index_migration_test.go:11: Creating execution project: test-acc-tf-p-1291362243447959508
2025-08-28T00:27:16.7547224Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-7583358268424389764
2025-08-28T00:27:17.3453703Z 2025/08/28 00:27:17 [DEBUG] Waiting for state to become: [IDLE]
2025-08-28T00:30:17.6386143Z 2025/08/28 00:30:17 [TRACE] Waiting 1m0s before next try
2025-08-28T00:31:17.9188677Z 2025/08/28 00:31:17 [TRACE] Waiting 10s before next try
2025-08-28T00:31:28.0908215Z 2025/08/28 00:31:28 [TRACE] Waiting 1m0s before next try
2025-08-28T00:32:28.4116414Z 2025/08/28 00:32:28 [TRACE] Waiting 10s before next try
2025-08-28T00:32:38.5580671Z 2025/08/28 00:32:38 [TRACE] Waiting 1m0s before next try
2025-08-28T00:33:38.8104329Z 2025/08/28 00:33:38 [TRACE] Waiting 10s before next try
2025-08-28T00:33:48.9674720Z 2025/08/28 00:33:48 [TRACE] Waiting 1m0s before next try
2025-08-28T00:34:49.3361525Z 2025/08/28 00:34:49 [TRACE] Waiting 10s before next try
2025-08-28T00:34:59.4829591Z 2025/08/28 00:34:59 [TRACE] Waiting 1m0s before next try
2025-08-28T00:35:59.7524222Z 2025/08/28 00:35:59 [TRACE] Waiting 10s before next try
2025-08-28T00:36:09.9084321Z 2025/08/28 00:36:09 [TRACE] Waiting 1m0s before next try
2025-08-28T00:37:10.3660483Z 2025/08/28 00:37:10 [DEBUG] Waiting for state to become: [COMPLETED]
2025-08-28T00:38:10.6962639Z 2025/08/28 00:38:10 [TRACE] Waiting 1m0s before next try
2025-08-28T00:39:10.9435540Z 2025/08/28 00:39:10 [TRACE] Waiting 10s before next try
2025-08-28T00:39:21.0581587Z 2025/08/28 00:39:21 [TRACE] Waiting 1m0s before next try
2025-08-28T00:40:21.2499764Z 2025/08/28 00:40:21 [TRACE] Waiting 10s before next try
2025-08-28T00:40:31.3652620Z 2025/08/28 00:40:31 [TRACE] Waiting 1m0s before next try
2025-08-28T00:41:31.5522814Z 2025/08/28 00:41:31 [TRACE] Waiting 10s before next try
2025-08-28T00:41:41.6798091Z 2025/08/28 00:41:41 [TRACE] Waiting 1m0s before next try
2025-08-28T00:42:41.8943684Z 2025/08/28 00:42:41 [TRACE] Waiting 10s before next try
2025-08-28T00:42:52.0223957Z 2025/08/28 00:42:52 [TRACE] Waiting 1m0s before next try
2025-08-28T00:43:52.2650029Z 2025/08/28 00:43:52 [TRACE] Waiting 10s before next try
2025-08-28T00:44:02.3895880Z 2025/08/28 00:44:02 [TRACE] Waiting 1m0s before next try
2025-08-28T00:45:02.7214076Z 2025/08/28 00:45:02 [TRACE] Waiting 10s before next try
2025-08-28T00:45:12.8659417Z 2025/08/28 00:45:12 [TRACE] Waiting 1m0s before next try
2025-08-28T00:46:13.1239303Z 2025/08/28 00:46:13 [TRACE] Waiting 10s before next try
2025-08-28T00:46:23.2618723Z 2025/08/28 00:46:23 [TRACE] Waiting 1m0s before next try
2025-08-28T00:47:23.4429598Z 2025/08/28 00:47:23 [TRACE] Waiting 10s before next try
2025-08-28T00:47:33.5693541Z 2025/08/28 00:47:33 [TRACE] Waiting 1m0s before next try
2025-08-28T00:48:33.8544649Z 2025/08/28 00:48:33 [TRACE] Waiting 10s before next try
2025-08-28T00:48:43.9877577Z 2025/08/28 00:48:43 [TRACE] Waiting 1m0s before next try
2025-08-28T00:49:44.1858105Z 2025/08/28 00:49:44 [TRACE] Waiting 10s before next try
2025-08-28T00:49:54.3173650Z 2025/08/28 00:49:54 [TRACE] Waiting 1m0s before next try
2025-08-28T00:50:54.5903029Z 2025/08/28 00:50:54 [TRACE] Waiting 10s before next try
2025-08-28T00:51:04.7200678Z 2025/08/28 00:51:04 [TRACE] Waiting 1m0s before next try
2025-08-28T00:52:04.9415776Z 2025/08/28 00:52:04 [TRACE] Waiting 10s before next try
2025-08-28T00:52:10.3711373Z 2025/08/28 00:52:10 [WARN] WaitForState timeout after 15m0s
2025-08-28T00:52:10.3712103Z 2025/08/28 00:52:10 [WARN] WaitForState starting 30s refresh grace period
2025-08-28T00:52:10.3715024Z     resource_search_index_migration_test.go:11: 
2025-08-28T00:52:10.3717227Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:134
2025-08-28T00:52:10.3721305Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:150
2025-08-28T00:52:10.3725841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2025-08-28T00:52:10.3727615Z         	Error:      	Received unexpected error:
2025-08-28T00:52:10.3729475Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-08-28T00:52:10.3730505Z         	Test:       	TestMigSearchIndex_basic
2025-08-28T00:52:10.3731286Z --- FAIL: TestMigSearchIndex_basic (1495.68s)
```

- 2025-08-29 PASS 22 minutes
- 2025-08-30 PASS 13 minutes
- 2025-08-31 PASS 13 minutes
- 2025-09-01
  - FAIL an hour

### Error 2025-09-01T00:30:15+00:00
```
2025-09-01T00:30:15.9271580Z === RUN   TestMigSearchIndex_basic
2025-09-01T00:30:15.9273805Z     resource_search_index_migration_test.go:11: Creating execution project: test-acc-tf-p-3102026638382816023
2025-09-01T00:30:17.9742467Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-7496563042180865250
2025-09-01T00:30:18.5540348Z 2025/09/01 00:30:18 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T00:33:18.7883303Z 2025/09/01 00:33:18 [TRACE] Waiting 1m0s before next try
2025-09-01T00:34:19.0653324Z 2025/09/01 00:34:19 [TRACE] Waiting 10s before next try
2025-09-01T00:34:29.1761108Z 2025/09/01 00:34:29 [TRACE] Waiting 1m0s before next try
2025-09-01T00:35:29.4248432Z 2025/09/01 00:35:29 [TRACE] Waiting 10s before next try
2025-09-01T00:35:39.5569136Z 2025/09/01 00:35:39 [TRACE] Waiting 1m0s before next try
2025-09-01T00:36:39.8720013Z 2025/09/01 00:36:39 [TRACE] Waiting 10s before next try
2025-09-01T00:36:49.9949074Z 2025/09/01 00:36:49 [TRACE] Waiting 1m0s before next try
2025-09-01T00:37:50.2826391Z 2025/09/01 00:37:50 [TRACE] Waiting 10s before next try
2025-09-01T00:38:00.4141125Z 2025/09/01 00:38:00 [TRACE] Waiting 1m0s before next try
2025-09-01T00:39:00.7511896Z 2025/09/01 00:39:00 [TRACE] Waiting 10s before next try
2025-09-01T00:39:10.8740455Z 2025/09/01 00:39:10 [TRACE] Waiting 1m0s before next try
2025-09-01T00:40:11.1312840Z 2025/09/01 00:40:11 [TRACE] Waiting 10s before next try
2025-09-01T00:40:21.2764727Z 2025/09/01 00:40:21 [TRACE] Waiting 1m0s before next try
2025-09-01T00:41:21.4482737Z 2025/09/01 00:41:21 [TRACE] Waiting 10s before next try
2025-09-01T00:41:31.5945404Z 2025/09/01 00:41:31 [TRACE] Waiting 1m0s before next try
2025-09-01T00:42:31.7983247Z 2025/09/01 00:42:31 [TRACE] Waiting 10s before next try
2025-09-01T00:42:41.9432048Z 2025/09/01 00:42:41 [TRACE] Waiting 1m0s before next try
2025-09-01T00:43:42.1330075Z 2025/09/01 00:43:42 [TRACE] Waiting 10s before next try
2025-09-01T00:43:52.2809961Z 2025/09/01 00:43:52 [TRACE] Waiting 1m0s before next try
2025-09-01T00:44:52.4737113Z 2025/09/01 00:44:52 [TRACE] Waiting 10s before next try
2025-09-01T00:45:02.6158533Z 2025/09/01 00:45:02 [TRACE] Waiting 1m0s before next try
2025-09-01T00:46:02.8604177Z 2025/09/01 00:46:02 [TRACE] Waiting 10s before next try
2025-09-01T00:46:12.9940860Z 2025/09/01 00:46:12 [TRACE] Waiting 1m0s before next try
2025-09-01T00:47:13.2348548Z 2025/09/01 00:47:13 [TRACE] Waiting 10s before next try
2025-09-01T00:47:23.3724085Z 2025/09/01 00:47:23 [TRACE] Waiting 1m0s before next try
2025-09-01T00:48:23.5572133Z 2025/09/01 00:48:23 [TRACE] Waiting 10s before next try
2025-09-01T00:48:33.6750704Z 2025/09/01 00:48:33 [TRACE] Waiting 1m0s before next try
2025-09-01T00:49:33.8545700Z 2025/09/01 00:49:33 [TRACE] Waiting 10s before next try
2025-09-01T00:49:43.9767161Z 2025/09/01 00:49:43 [TRACE] Waiting 1m0s before next try
2025-09-01T00:50:44.1568110Z 2025/09/01 00:50:44 [TRACE] Waiting 10s before next try
2025-09-01T00:50:54.2788522Z 2025/09/01 00:50:54 [TRACE] Waiting 1m0s before next try
2025-09-01T00:51:54.5589123Z 2025/09/01 00:51:54 [TRACE] Waiting 10s before next try
2025-09-01T00:52:04.6957924Z 2025/09/01 00:52:04 [TRACE] Waiting 1m0s before next try
2025-09-01T00:53:04.8531683Z 2025/09/01 00:53:04 [TRACE] Waiting 10s before next try
2025-09-01T00:53:14.9768995Z 2025/09/01 00:53:14 [TRACE] Waiting 1m0s before next try
2025-09-01T00:54:15.2065676Z 2025/09/01 00:54:15 [TRACE] Waiting 10s before next try
2025-09-01T00:54:25.3587820Z 2025/09/01 00:54:25 [TRACE] Waiting 1m0s before next try
2025-09-01T00:55:25.5823171Z 2025/09/01 00:55:25 [TRACE] Waiting 10s before next try
2025-09-01T00:55:35.7053364Z 2025/09/01 00:55:35 [TRACE] Waiting 1m0s before next try
2025-09-01T00:56:35.9245909Z 2025/09/01 00:56:35 [TRACE] Waiting 10s before next try
2025-09-01T00:56:46.0583757Z 2025/09/01 00:56:46 [TRACE] Waiting 1m0s before next try
2025-09-01T00:57:46.3020162Z 2025/09/01 00:57:46 [TRACE] Waiting 10s before next try
2025-09-01T00:57:56.4504147Z 2025/09/01 00:57:56 [TRACE] Waiting 1m0s before next try
2025-09-01T00:58:56.7020220Z 2025/09/01 00:58:56 [TRACE] Waiting 10s before next try
2025-09-01T00:59:06.8264587Z 2025/09/01 00:59:06 [TRACE] Waiting 1m0s before next try
2025-09-01T01:00:07.0755561Z 2025/09/01 01:00:07 [TRACE] Waiting 10s before next try
2025-09-01T01:00:17.2105237Z 2025/09/01 01:00:17 [TRACE] Waiting 1m0s before next try
2025-09-01T01:01:17.4337958Z 2025/09/01 01:01:17 [TRACE] Waiting 10s before next try
2025-09-01T01:01:27.5803829Z 2025/09/01 01:01:27 [TRACE] Waiting 1m0s before next try
2025-09-01T01:02:27.7494971Z 2025/09/01 01:02:27 [TRACE] Waiting 10s before next try
2025-09-01T01:02:37.8844401Z 2025/09/01 01:02:37 [TRACE] Waiting 1m0s before next try
2025-09-01T01:03:38.0582901Z 2025/09/01 01:03:38 [TRACE] Waiting 10s before next try
2025-09-01T01:03:48.1840966Z 2025/09/01 01:03:48 [TRACE] Waiting 1m0s before next try
2025-09-01T01:04:48.4768903Z 2025/09/01 01:04:48 [TRACE] Waiting 10s before next try
2025-09-01T01:04:58.6185426Z 2025/09/01 01:04:58 [TRACE] Waiting 1m0s before next try
2025-09-01T01:05:58.8118699Z 2025/09/01 01:05:58 [TRACE] Waiting 10s before next try
2025-09-01T01:06:08.9511945Z 2025/09/01 01:06:08 [TRACE] Waiting 1m0s before next try
2025-09-01T01:07:09.1825112Z 2025/09/01 01:07:09 [TRACE] Waiting 10s before next try
2025-09-01T01:07:19.3207787Z 2025/09/01 01:07:19 [TRACE] Waiting 1m0s before next try
2025-09-01T01:08:19.6683491Z 2025/09/01 01:08:19 [TRACE] Waiting 10s before next try
2025-09-01T01:08:29.7984738Z 2025/09/01 01:08:29 [TRACE] Waiting 1m0s before next try
2025-09-01T01:09:30.0111105Z 2025/09/01 01:09:30 [TRACE] Waiting 10s before next try
2025-09-01T01:09:40.1473028Z 2025/09/01 01:09:40 [TRACE] Waiting 1m0s before next try
2025-09-01T01:10:40.4039944Z 2025/09/01 01:10:40 [TRACE] Waiting 10s before next try
2025-09-01T01:10:50.5409682Z 2025/09/01 01:10:50 [TRACE] Waiting 1m0s before next try
2025-09-01T01:11:50.7894492Z 2025/09/01 01:11:50 [TRACE] Waiting 10s before next try
2025-09-01T01:12:00.9211926Z 2025/09/01 01:12:00 [TRACE] Waiting 1m0s before next try
2025-09-01T01:13:01.1619181Z 2025/09/01 01:13:01 [TRACE] Waiting 10s before next try
2025-09-01T01:13:11.3185714Z 2025/09/01 01:13:11 [TRACE] Waiting 1m0s before next try
2025-09-01T01:14:11.6186489Z 2025/09/01 01:14:11 [TRACE] Waiting 10s before next try
2025-09-01T01:14:21.7700127Z 2025/09/01 01:14:21 [TRACE] Waiting 1m0s before next try
2025-09-01T01:15:21.9888168Z 2025/09/01 01:15:21 [TRACE] Waiting 10s before next try
2025-09-01T01:15:32.1437772Z 2025/09/01 01:15:32 [TRACE] Waiting 1m0s before next try
2025-09-01T01:16:32.3844109Z 2025/09/01 01:16:32 [TRACE] Waiting 10s before next try
2025-09-01T01:16:42.5182390Z 2025/09/01 01:16:42 [TRACE] Waiting 1m0s before next try
2025-09-01T01:17:42.8431264Z 2025/09/01 01:17:42 [TRACE] Waiting 10s before next try
2025-09-01T01:17:52.9643404Z 2025/09/01 01:17:52 [TRACE] Waiting 1m0s before next try
2025-09-01T01:18:53.2372919Z 2025/09/01 01:18:53 [TRACE] Waiting 10s before next try
2025-09-01T01:19:03.3838540Z 2025/09/01 01:19:03 [TRACE] Waiting 1m0s before next try
2025-09-01T01:20:03.5686354Z 2025/09/01 01:20:03 [TRACE] Waiting 10s before next try
2025-09-01T01:20:13.6838423Z 2025/09/01 01:20:13 [TRACE] Waiting 1m0s before next try
2025-09-01T01:21:13.8511093Z 2025/09/01 01:21:13 [TRACE] Waiting 10s before next try
2025-09-01T01:21:23.9918011Z 2025/09/01 01:21:23 [TRACE] Waiting 1m0s before next try
2025-09-01T01:22:24.1938660Z 2025/09/01 01:22:24 [TRACE] Waiting 10s before next try
2025-09-01T01:22:34.3326300Z 2025/09/01 01:22:34 [TRACE] Waiting 1m0s before next try
2025-09-01T01:23:34.5431476Z 2025/09/01 01:23:34 [TRACE] Waiting 10s before next try
2025-09-01T01:23:44.6784632Z 2025/09/01 01:23:44 [TRACE] Waiting 1m0s before next try
2025-09-01T01:24:44.9508768Z 2025/09/01 01:24:44 [TRACE] Waiting 10s before next try
2025-09-01T01:24:55.1046319Z 2025/09/01 01:24:55 [TRACE] Waiting 1m0s before next try
2025-09-01T01:25:55.2922917Z 2025/09/01 01:25:55 [TRACE] Waiting 10s before next try
2025-09-01T01:26:05.4117521Z 2025/09/01 01:26:05 [TRACE] Waiting 1m0s before next try
2025-09-01T01:27:05.7005870Z 2025/09/01 01:27:05 [TRACE] Waiting 10s before next try
2025-09-01T01:27:15.8437887Z 2025/09/01 01:27:15 [TRACE] Waiting 1m0s before next try
2025-09-01T01:28:16.1557507Z 2025/09/01 01:28:16 [TRACE] Waiting 10s before next try
2025-09-01T01:28:26.3145492Z 2025/09/01 01:28:26 [TRACE] Waiting 1m0s before next try
2025-09-01T01:29:26.5533664Z 2025/09/01 01:29:26 [TRACE] Waiting 10s before next try
2025-09-01T01:29:36.6894007Z 2025/09/01 01:29:36 [TRACE] Waiting 1m0s before next try
2025-09-01T01:30:18.5543370Z 2025/09/01 01:30:18 [WARN] WaitForState timeout after 1h0m0s
2025-09-01T01:30:18.5544492Z 2025/09/01 01:30:18 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T01:30:18.5554170Z     resource_search_index_migration_test.go:11: 
2025-09-01T01:30:18.5556003Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-09-01T01:30:18.5559334Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:130
2025-09-01T01:30:18.5563677Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:150
2025-09-01T01:30:18.5567373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2025-09-01T01:30:18.5568801Z         	Error:      	Received unexpected error:
2025-09-01T01:30:18.5570379Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T01:30:18.5571298Z         	Test:       	TestMigSearchIndex_basic
2025-09-01T01:30:18.5573195Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7496563042180865250, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T01:30:18.5574375Z --- FAIL: TestMigSearchIndex_basic (3602.63s)
```

  - FAIL an hour

### Error 2025-09-01T05:58:03+00:00
```
2025-09-01T05:58:03.3081155Z === RUN   TestMigSearchIndex_basic
2025-09-01T05:58:03.3085873Z     resource_search_index_migration_test.go:11: Creating execution project: test-acc-tf-p-1074212072086528069
2025-09-01T05:58:05.4296531Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-423457909835860500
2025-09-01T05:58:05.9917446Z 2025/09/01 05:58:05 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T06:01:06.2672455Z 2025/09/01 06:01:06 [TRACE] Waiting 1m0s before next try
2025-09-01T06:02:06.3960617Z 2025/09/01 06:02:06 [TRACE] Waiting 10s before next try
2025-09-01T06:02:16.4891630Z 2025/09/01 06:02:16 [TRACE] Waiting 1m0s before next try
2025-09-01T06:03:16.6927260Z 2025/09/01 06:03:16 [TRACE] Waiting 10s before next try
2025-09-01T06:03:26.7982625Z 2025/09/01 06:03:26 [TRACE] Waiting 1m0s before next try
2025-09-01T06:04:26.9135009Z 2025/09/01 06:04:26 [TRACE] Waiting 10s before next try
2025-09-01T06:04:37.0272928Z 2025/09/01 06:04:37 [TRACE] Waiting 1m0s before next try
2025-09-01T06:05:37.2088592Z 2025/09/01 06:05:37 [TRACE] Waiting 10s before next try
2025-09-01T06:05:47.3076915Z 2025/09/01 06:05:47 [TRACE] Waiting 1m0s before next try
2025-09-01T06:06:47.4899020Z 2025/09/01 06:06:47 [TRACE] Waiting 10s before next try
2025-09-01T06:06:57.6025019Z 2025/09/01 06:06:57 [TRACE] Waiting 1m0s before next try
2025-09-01T06:07:57.7399643Z 2025/09/01 06:07:57 [TRACE] Waiting 10s before next try
2025-09-01T06:08:07.8611825Z 2025/09/01 06:08:07 [TRACE] Waiting 1m0s before next try
2025-09-01T06:09:07.9920495Z 2025/09/01 06:09:07 [TRACE] Waiting 10s before next try
2025-09-01T06:09:18.1167455Z 2025/09/01 06:09:18 [TRACE] Waiting 1m0s before next try
2025-09-01T06:10:18.2557743Z 2025/09/01 06:10:18 [TRACE] Waiting 10s before next try
2025-09-01T06:10:28.3490435Z 2025/09/01 06:10:28 [TRACE] Waiting 1m0s before next try
2025-09-01T06:11:28.4895378Z 2025/09/01 06:11:28 [TRACE] Waiting 10s before next try
2025-09-01T06:11:38.6048305Z 2025/09/01 06:11:38 [TRACE] Waiting 1m0s before next try
2025-09-01T06:12:38.8072139Z 2025/09/01 06:12:38 [TRACE] Waiting 10s before next try
2025-09-01T06:12:48.9142022Z 2025/09/01 06:12:48 [TRACE] Waiting 1m0s before next try
2025-09-01T06:13:49.1279842Z 2025/09/01 06:13:49 [TRACE] Waiting 10s before next try
2025-09-01T06:13:59.2282480Z 2025/09/01 06:13:59 [TRACE] Waiting 1m0s before next try
2025-09-01T06:14:59.3689212Z 2025/09/01 06:14:59 [TRACE] Waiting 10s before next try
2025-09-01T06:15:09.4816877Z 2025/09/01 06:15:09 [TRACE] Waiting 1m0s before next try
2025-09-01T06:16:09.6057683Z 2025/09/01 06:16:09 [TRACE] Waiting 10s before next try
2025-09-01T06:16:19.7561632Z 2025/09/01 06:16:19 [TRACE] Waiting 1m0s before next try
2025-09-01T06:17:19.8897945Z 2025/09/01 06:17:19 [TRACE] Waiting 10s before next try
2025-09-01T06:17:29.9834373Z 2025/09/01 06:17:29 [TRACE] Waiting 1m0s before next try
2025-09-01T06:18:30.1959574Z 2025/09/01 06:18:30 [TRACE] Waiting 10s before next try
2025-09-01T06:18:40.2902029Z 2025/09/01 06:18:40 [TRACE] Waiting 1m0s before next try
2025-09-01T06:19:40.5098198Z 2025/09/01 06:19:40 [TRACE] Waiting 10s before next try
2025-09-01T06:19:50.6181147Z 2025/09/01 06:19:50 [TRACE] Waiting 1m0s before next try
2025-09-01T06:20:50.7972692Z 2025/09/01 06:20:50 [TRACE] Waiting 10s before next try
2025-09-01T06:21:00.9070872Z 2025/09/01 06:21:00 [TRACE] Waiting 1m0s before next try
2025-09-01T06:22:01.0595132Z 2025/09/01 06:22:01 [TRACE] Waiting 10s before next try
2025-09-01T06:22:11.1590645Z 2025/09/01 06:22:11 [TRACE] Waiting 1m0s before next try
2025-09-01T06:23:11.3310034Z 2025/09/01 06:23:11 [TRACE] Waiting 10s before next try
2025-09-01T06:23:21.4336561Z 2025/09/01 06:23:21 [TRACE] Waiting 1m0s before next try
2025-09-01T06:24:21.5867629Z 2025/09/01 06:24:21 [TRACE] Waiting 10s before next try
2025-09-01T06:24:31.6985149Z 2025/09/01 06:24:31 [TRACE] Waiting 1m0s before next try
2025-09-01T06:25:31.8500144Z 2025/09/01 06:25:31 [TRACE] Waiting 10s before next try
2025-09-01T06:25:41.9496801Z 2025/09/01 06:25:41 [TRACE] Waiting 1m0s before next try
2025-09-01T06:26:42.1197263Z 2025/09/01 06:26:42 [TRACE] Waiting 10s before next try
2025-09-01T06:26:52.2280579Z 2025/09/01 06:26:52 [TRACE] Waiting 1m0s before next try
2025-09-01T06:27:52.3738108Z 2025/09/01 06:27:52 [TRACE] Waiting 10s before next try
2025-09-01T06:28:02.4699978Z 2025/09/01 06:28:02 [TRACE] Waiting 1m0s before next try
2025-09-01T06:29:02.6192323Z 2025/09/01 06:29:02 [TRACE] Waiting 10s before next try
2025-09-01T06:29:12.7392354Z 2025/09/01 06:29:12 [TRACE] Waiting 1m0s before next try
2025-09-01T06:30:12.8778936Z 2025/09/01 06:30:12 [TRACE] Waiting 10s before next try
2025-09-01T06:30:22.9949894Z 2025/09/01 06:30:22 [TRACE] Waiting 1m0s before next try
2025-09-01T06:31:23.1760721Z 2025/09/01 06:31:23 [TRACE] Waiting 10s before next try
2025-09-01T06:31:33.3000616Z 2025/09/01 06:31:33 [TRACE] Waiting 1m0s before next try
2025-09-01T06:32:33.4753178Z 2025/09/01 06:32:33 [TRACE] Waiting 10s before next try
2025-09-01T06:32:43.5948590Z 2025/09/01 06:32:43 [TRACE] Waiting 1m0s before next try
2025-09-01T06:33:43.7799505Z 2025/09/01 06:33:43 [TRACE] Waiting 10s before next try
2025-09-01T06:33:53.8706845Z 2025/09/01 06:33:53 [TRACE] Waiting 1m0s before next try
2025-09-01T06:34:54.0815819Z 2025/09/01 06:34:54 [TRACE] Waiting 10s before next try
2025-09-01T06:35:04.1857394Z 2025/09/01 06:35:04 [TRACE] Waiting 1m0s before next try
2025-09-01T06:36:04.3428933Z 2025/09/01 06:36:04 [TRACE] Waiting 10s before next try
2025-09-01T06:36:14.4470904Z 2025/09/01 06:36:14 [TRACE] Waiting 1m0s before next try
2025-09-01T06:37:14.5893057Z 2025/09/01 06:37:14 [TRACE] Waiting 10s before next try
2025-09-01T06:37:24.7069743Z 2025/09/01 06:37:24 [TRACE] Waiting 1m0s before next try
2025-09-01T06:38:24.8895898Z 2025/09/01 06:38:24 [TRACE] Waiting 10s before next try
2025-09-01T06:38:34.9709249Z 2025/09/01 06:38:34 [TRACE] Waiting 1m0s before next try
2025-09-01T06:39:35.0680109Z 2025/09/01 06:39:35 [TRACE] Waiting 10s before next try
2025-09-01T06:39:45.1788740Z 2025/09/01 06:39:45 [TRACE] Waiting 1m0s before next try
2025-09-01T06:40:45.3935941Z 2025/09/01 06:40:45 [TRACE] Waiting 10s before next try
2025-09-01T06:40:55.4919109Z 2025/09/01 06:40:55 [TRACE] Waiting 1m0s before next try
2025-09-01T06:41:55.6425805Z 2025/09/01 06:41:55 [TRACE] Waiting 10s before next try
2025-09-01T06:42:05.7488301Z 2025/09/01 06:42:05 [TRACE] Waiting 1m0s before next try
2025-09-01T06:43:05.9800391Z 2025/09/01 06:43:05 [TRACE] Waiting 10s before next try
2025-09-01T06:43:16.0977788Z 2025/09/01 06:43:16 [TRACE] Waiting 1m0s before next try
2025-09-01T06:44:16.2654200Z 2025/09/01 06:44:16 [TRACE] Waiting 10s before next try
2025-09-01T06:44:26.3941286Z 2025/09/01 06:44:26 [TRACE] Waiting 1m0s before next try
2025-09-01T06:45:26.5725945Z 2025/09/01 06:45:26 [TRACE] Waiting 10s before next try
2025-09-01T06:45:36.6953493Z 2025/09/01 06:45:36 [TRACE] Waiting 1m0s before next try
2025-09-01T06:46:36.8469687Z 2025/09/01 06:46:36 [TRACE] Waiting 10s before next try
2025-09-01T06:46:46.9716891Z 2025/09/01 06:46:46 [TRACE] Waiting 1m0s before next try
2025-09-01T06:47:47.1231694Z 2025/09/01 06:47:47 [TRACE] Waiting 10s before next try
2025-09-01T06:47:57.2288083Z 2025/09/01 06:47:57 [TRACE] Waiting 1m0s before next try
2025-09-01T06:48:57.3851222Z 2025/09/01 06:48:57 [TRACE] Waiting 10s before next try
2025-09-01T06:49:07.5090184Z 2025/09/01 06:49:07 [TRACE] Waiting 1m0s before next try
2025-09-01T06:50:07.6301767Z 2025/09/01 06:50:07 [TRACE] Waiting 10s before next try
2025-09-01T06:50:17.7530800Z 2025/09/01 06:50:17 [TRACE] Waiting 1m0s before next try
2025-09-01T06:51:17.8635401Z 2025/09/01 06:51:17 [TRACE] Waiting 10s before next try
2025-09-01T06:51:27.9879298Z 2025/09/01 06:51:27 [TRACE] Waiting 1m0s before next try
2025-09-01T06:52:28.1410767Z 2025/09/01 06:52:28 [TRACE] Waiting 10s before next try
2025-09-01T06:52:38.2450191Z 2025/09/01 06:52:38 [TRACE] Waiting 1m0s before next try
2025-09-01T06:53:38.3941472Z 2025/09/01 06:53:38 [TRACE] Waiting 10s before next try
2025-09-01T06:53:48.5088638Z 2025/09/01 06:53:48 [TRACE] Waiting 1m0s before next try
2025-09-01T06:54:48.6600345Z 2025/09/01 06:54:48 [TRACE] Waiting 10s before next try
2025-09-01T06:54:58.7603070Z 2025/09/01 06:54:58 [TRACE] Waiting 1m0s before next try
2025-09-01T06:55:58.8838458Z 2025/09/01 06:55:58 [TRACE] Waiting 10s before next try
2025-09-01T06:56:08.9941432Z 2025/09/01 06:56:08 [TRACE] Waiting 1m0s before next try
2025-09-01T06:57:09.1690559Z 2025/09/01 06:57:09 [TRACE] Waiting 10s before next try
2025-09-01T06:57:19.2979325Z 2025/09/01 06:57:19 [TRACE] Waiting 1m0s before next try
2025-09-01T06:58:05.9924349Z 2025/09/01 06:58:05 [WARN] WaitForState timeout after 1h0m0s
2025-09-01T06:58:05.9925853Z 2025/09/01 06:58:05 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T06:58:05.9942162Z     resource_search_index_migration_test.go:11: 
2025-09-01T06:58:05.9943902Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-09-01T06:58:05.9947419Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:130
2025-09-01T06:58:05.9951334Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:150
2025-09-01T06:58:05.9955260Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2025-09-01T06:58:05.9956710Z         	Error:      	Received unexpected error:
2025-09-01T06:58:05.9958298Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T06:58:05.9959194Z         	Test:       	TestMigSearchIndex_basic
2025-09-01T06:58:05.9960581Z         	Messages:   	Cluster creation failed: test-acc-tf-c-423457909835860500, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-09-01T06:58:05.9961274Z --- FAIL: TestMigSearchIndex_basic (3602.68s)
```

  - FAIL 33 minutes

### Error 2025-09-01T07:57:08+00:00
```
2025-09-01T07:57:08.8694422Z === RUN   TestMigSearchIndex_basic
2025-09-01T07:57:08.8695783Z     resource_search_index_migration_test.go:11: Creating execution project: test-acc-tf-p-6426665575311143708
2025-09-01T07:57:10.3098778Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-1264585706881872893
2025-09-01T07:57:10.8796180Z 2025/09/01 07:57:10 [DEBUG] Waiting for state to become: [IDLE]
2025-09-01T08:00:11.0653437Z 2025/09/01 08:00:11 [TRACE] Waiting 1m0s before next try
2025-09-01T08:01:11.2408678Z 2025/09/01 08:01:11 [TRACE] Waiting 10s before next try
2025-09-01T08:01:21.3326350Z 2025/09/01 08:01:21 [TRACE] Waiting 1m0s before next try
2025-09-01T08:02:21.5089470Z 2025/09/01 08:02:21 [TRACE] Waiting 10s before next try
2025-09-01T08:02:31.6117781Z 2025/09/01 08:02:31 [TRACE] Waiting 1m0s before next try
2025-09-01T08:03:31.7880575Z 2025/09/01 08:03:31 [TRACE] Waiting 10s before next try
2025-09-01T08:03:41.8800004Z 2025/09/01 08:03:41 [TRACE] Waiting 1m0s before next try
2025-09-01T08:04:42.1532822Z 2025/09/01 08:04:42 [TRACE] Waiting 10s before next try
2025-09-01T08:04:52.2654897Z 2025/09/01 08:04:52 [TRACE] Waiting 1m0s before next try
2025-09-01T08:05:52.4100588Z 2025/09/01 08:05:52 [TRACE] Waiting 10s before next try
2025-09-01T08:06:02.5266452Z 2025/09/01 08:06:02 [TRACE] Waiting 1m0s before next try
2025-09-01T08:07:02.7012100Z 2025/09/01 08:07:02 [TRACE] Waiting 10s before next try
2025-09-01T08:07:12.8224337Z 2025/09/01 08:07:12 [TRACE] Waiting 1m0s before next try
2025-09-01T08:08:12.9884952Z 2025/09/01 08:08:12 [TRACE] Waiting 10s before next try
2025-09-01T08:08:23.1046694Z 2025/09/01 08:08:23 [TRACE] Waiting 1m0s before next try
2025-09-01T08:09:23.2374140Z 2025/09/01 08:09:23 [TRACE] Waiting 10s before next try
2025-09-01T08:09:33.3300960Z 2025/09/01 08:09:33 [TRACE] Waiting 1m0s before next try
2025-09-01T08:10:33.4970993Z 2025/09/01 08:10:33 [TRACE] Waiting 10s before next try
2025-09-01T08:10:43.5989960Z 2025/09/01 08:10:43 [TRACE] Waiting 1m0s before next try
2025-09-01T08:11:43.8240049Z 2025/09/01 08:11:43 [TRACE] Waiting 10s before next try
2025-09-01T08:11:53.9492370Z 2025/09/01 08:11:53 [TRACE] Waiting 1m0s before next try
2025-09-01T08:12:54.1252634Z 2025/09/01 08:12:54 [TRACE] Waiting 10s before next try
2025-09-01T08:13:04.2363345Z 2025/09/01 08:13:04 [TRACE] Waiting 1m0s before next try
2025-09-01T08:14:04.4439054Z 2025/09/01 08:14:04 [TRACE] Waiting 10s before next try
2025-09-01T08:14:14.5558927Z 2025/09/01 08:14:14 [TRACE] Waiting 1m0s before next try
2025-09-01T08:15:14.8685077Z 2025/09/01 08:15:14 [DEBUG] Waiting for state to become: [COMPLETED]
2025-09-01T08:16:14.9746807Z 2025/09/01 08:16:14 [TRACE] Waiting 1m0s before next try
2025-09-01T08:17:15.0651254Z 2025/09/01 08:17:15 [TRACE] Waiting 10s before next try
2025-09-01T08:17:25.1412078Z 2025/09/01 08:17:25 [TRACE] Waiting 1m0s before next try
2025-09-01T08:18:25.2420142Z 2025/09/01 08:18:25 [TRACE] Waiting 10s before next try
2025-09-01T08:18:35.3258698Z 2025/09/01 08:18:35 [TRACE] Waiting 1m0s before next try
2025-09-01T08:19:35.4451936Z 2025/09/01 08:19:35 [TRACE] Waiting 10s before next try
2025-09-01T08:19:45.5217331Z 2025/09/01 08:19:45 [TRACE] Waiting 1m0s before next try
2025-09-01T08:20:45.7334809Z 2025/09/01 08:20:45 [TRACE] Waiting 10s before next try
2025-09-01T08:20:55.8142657Z 2025/09/01 08:20:55 [TRACE] Waiting 1m0s before next try
2025-09-01T08:21:55.9553463Z 2025/09/01 08:21:55 [TRACE] Waiting 10s before next try
2025-09-01T08:22:06.0278967Z 2025/09/01 08:22:06 [TRACE] Waiting 1m0s before next try
2025-09-01T08:23:06.1393085Z 2025/09/01 08:23:06 [TRACE] Waiting 10s before next try
2025-09-01T08:23:16.2054600Z 2025/09/01 08:23:16 [TRACE] Waiting 1m0s before next try
2025-09-01T08:24:16.3015828Z 2025/09/01 08:24:16 [TRACE] Waiting 10s before next try
2025-09-01T08:24:26.3684992Z 2025/09/01 08:24:26 [TRACE] Waiting 1m0s before next try
2025-09-01T08:25:26.4932776Z 2025/09/01 08:25:26 [TRACE] Waiting 10s before next try
2025-09-01T08:25:36.5547771Z 2025/09/01 08:25:36 [TRACE] Waiting 1m0s before next try
2025-09-01T08:26:36.6483120Z 2025/09/01 08:26:36 [TRACE] Waiting 10s before next try
2025-09-01T08:26:46.7251921Z 2025/09/01 08:26:46 [TRACE] Waiting 1m0s before next try
2025-09-01T08:27:46.9268940Z 2025/09/01 08:27:46 [TRACE] Waiting 10s before next try
2025-09-01T08:27:57.0157124Z 2025/09/01 08:27:57 [TRACE] Waiting 1m0s before next try
2025-09-01T08:28:57.1550499Z 2025/09/01 08:28:57 [TRACE] Waiting 10s before next try
2025-09-01T08:29:07.2232192Z 2025/09/01 08:29:07 [TRACE] Waiting 1m0s before next try
2025-09-01T08:30:07.4301920Z 2025/09/01 08:30:07 [TRACE] Waiting 10s before next try
2025-09-01T08:30:14.8756231Z 2025/09/01 08:30:14 [WARN] WaitForState timeout after 15m0s
2025-09-01T08:30:14.8757153Z 2025/09/01 08:30:14 [WARN] WaitForState starting 30s refresh grace period
2025-09-01T08:30:14.8760229Z     resource_search_index_migration_test.go:11: 
2025-09-01T08:30:14.8761945Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:134
2025-09-01T08:30:14.8765738Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:150
2025-09-01T08:30:14.8769998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2025-09-01T08:30:14.8771541Z         	Error:      	Received unexpected error:
2025-09-01T08:30:14.8773301Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-09-01T08:30:14.8774242Z         	Test:       	TestMigSearchIndex_basic
2025-09-01T08:30:14.8774780Z --- FAIL: TestMigSearchIndex_basic (1986.01s)
```

  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-09-02 PASS 15 minutes
- 2025-09-03 PASS 20 minutes
- 2025-09-04 PASS 15 minutes