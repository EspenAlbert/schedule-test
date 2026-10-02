# search_index/searchindex/TestMigSearchIndex_basic Test Details
# Found 22 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 18) FAIL(x 4)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-11 00:41](#error-2026-09-11t0041460000) |  | dev | timeout | 3604.05s
[2026-09-11 06:40](#error-2026-09-11t0640340000) |  | dev |  | 1424.09s
[2026-09-23 00:40](#error-2026-09-23t0040290000) |  | dev |  | 927.05s
[2026-09-23 08:25](#error-2026-09-23t0825380000) |  | dev |  | 869.03s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 18 minutes
- 2026-09-03: MISSING
- 2026-09-04 PASS 26 minutes
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07 PASS 17 minutes
- 2026-09-08: MISSING
- 2026-09-09 PASS 18 minutes
- 2026-09-10: MISSING
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T00:41:46+00:00
```
2026-09-11T00:41:46.1268301Z === RUN   TestMigSearchIndex_basic
2026-09-11T00:41:46.1269694Z     resource_search_index_migration_test.go:11: Creating execution project (1): test-acc-tf-p-3909164943781113722
2026-09-11T00:41:48.8845176Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-7715158614201077927
2026-09-11T00:41:50.6432370Z 2026/09/11 00:41:50 [DEBUG] Waiting for state to become: [IDLE]
2026-09-11T00:44:50.9830819Z 2026/09/11 00:44:50 [TRACE] Waiting 1m0s before next try
2026-09-11T00:45:51.3859459Z 2026/09/11 00:45:51 [TRACE] Waiting 10s before next try
2026-09-11T00:46:01.6462721Z 2026/09/11 00:46:01 [TRACE] Waiting 1m0s before next try
2026-09-11T00:47:02.1229386Z 2026/09/11 00:47:02 [TRACE] Waiting 10s before next try
2026-09-11T00:47:12.3762977Z 2026/09/11 00:47:12 [TRACE] Waiting 1m0s before next try
2026-09-11T00:48:12.8712571Z 2026/09/11 00:48:12 [TRACE] Waiting 10s before next try
2026-09-11T00:48:24.7667039Z 2026/09/11 00:48:24 [TRACE] Waiting 1m0s before next try
2026-09-11T00:49:25.2390565Z 2026/09/11 00:49:25 [TRACE] Waiting 10s before next try
2026-09-11T00:49:35.5666492Z 2026/09/11 00:49:35 [TRACE] Waiting 1m0s before next try
2026-09-11T00:50:36.1863872Z 2026/09/11 00:50:36 [TRACE] Waiting 10s before next try
2026-09-11T00:50:46.4272892Z 2026/09/11 00:50:46 [TRACE] Waiting 1m0s before next try
2026-09-11T00:51:46.7866732Z 2026/09/11 00:51:46 [TRACE] Waiting 10s before next try
2026-09-11T00:51:57.0613769Z 2026/09/11 00:51:57 [TRACE] Waiting 1m0s before next try
2026-09-11T00:52:57.5534342Z 2026/09/11 00:52:57 [TRACE] Waiting 10s before next try
2026-09-11T00:53:07.8348861Z 2026/09/11 00:53:07 [TRACE] Waiting 1m0s before next try
2026-09-11T00:54:08.2386590Z 2026/09/11 00:54:08 [TRACE] Waiting 10s before next try
2026-09-11T00:54:18.4958222Z 2026/09/11 00:54:18 [TRACE] Waiting 1m0s before next try
2026-09-11T00:55:18.9505629Z 2026/09/11 00:55:18 [TRACE] Waiting 10s before next try
2026-09-11T00:55:29.1892930Z 2026/09/11 00:55:29 [TRACE] Waiting 1m0s before next try
2026-09-11T00:56:29.5984196Z 2026/09/11 00:56:29 [TRACE] Waiting 10s before next try
2026-09-11T00:56:39.8601399Z 2026/09/11 00:56:39 [TRACE] Waiting 1m0s before next try
2026-09-11T00:57:40.2557724Z 2026/09/11 00:57:40 [TRACE] Waiting 10s before next try
2026-09-11T00:57:50.5742831Z 2026/09/11 00:57:50 [TRACE] Waiting 1m0s before next try
2026-09-11T00:58:50.9557460Z 2026/09/11 00:58:50 [TRACE] Waiting 10s before next try
2026-09-11T00:59:01.2011606Z 2026/09/11 00:59:01 [TRACE] Waiting 1m0s before next try
2026-09-11T01:00:01.6072397Z 2026/09/11 01:00:01 [TRACE] Waiting 10s before next try
2026-09-11T01:00:11.9496251Z 2026/09/11 01:00:11 [TRACE] Waiting 1m0s before next try
2026-09-11T01:01:12.3539275Z 2026/09/11 01:01:12 [TRACE] Waiting 10s before next try
2026-09-11T01:01:22.6250564Z 2026/09/11 01:01:22 [TRACE] Waiting 1m0s before next try
2026-09-11T01:02:23.0654574Z 2026/09/11 01:02:23 [TRACE] Waiting 10s before next try
2026-09-11T01:02:33.4051215Z 2026/09/11 01:02:33 [TRACE] Waiting 1m0s before next try
2026-09-11T01:03:33.8252783Z 2026/09/11 01:03:33 [TRACE] Waiting 10s before next try
2026-09-11T01:03:44.0818213Z 2026/09/11 01:03:44 [TRACE] Waiting 1m0s before next try
2026-09-11T01:04:44.4629975Z 2026/09/11 01:04:44 [TRACE] Waiting 10s before next try
2026-09-11T01:04:54.7376385Z 2026/09/11 01:04:54 [TRACE] Waiting 1m0s before next try
2026-09-11T01:05:55.2022064Z 2026/09/11 01:05:55 [TRACE] Waiting 10s before next try
2026-09-11T01:06:05.4436065Z 2026/09/11 01:06:05 [TRACE] Waiting 1m0s before next try
2026-09-11T01:07:05.8303811Z 2026/09/11 01:07:05 [TRACE] Waiting 10s before next try
2026-09-11T01:07:16.2209999Z 2026/09/11 01:07:16 [TRACE] Waiting 1m0s before next try
2026-09-11T01:08:16.6171944Z 2026/09/11 01:08:16 [TRACE] Waiting 10s before next try
2026-09-11T01:08:26.8744391Z 2026/09/11 01:08:26 [TRACE] Waiting 1m0s before next try
2026-09-11T01:09:27.2866286Z 2026/09/11 01:09:27 [TRACE] Waiting 10s before next try
2026-09-11T01:09:37.5489827Z 2026/09/11 01:09:37 [TRACE] Waiting 1m0s before next try
2026-09-11T01:10:38.0313046Z 2026/09/11 01:10:38 [TRACE] Waiting 10s before next try
2026-09-11T01:10:48.2998148Z 2026/09/11 01:10:48 [TRACE] Waiting 1m0s before next try
2026-09-11T01:11:48.7424813Z 2026/09/11 01:11:48 [TRACE] Waiting 10s before next try
2026-09-11T01:11:58.9757723Z 2026/09/11 01:11:58 [TRACE] Waiting 1m0s before next try
2026-09-11T01:12:59.3660825Z 2026/09/11 01:12:59 [TRACE] Waiting 10s before next try
2026-09-11T01:13:09.6035650Z 2026/09/11 01:13:09 [TRACE] Waiting 1m0s before next try
2026-09-11T01:14:10.0559371Z 2026/09/11 01:14:10 [TRACE] Waiting 10s before next try
2026-09-11T01:14:20.2853088Z 2026/09/11 01:14:20 [TRACE] Waiting 1m0s before next try
2026-09-11T01:15:20.7071121Z 2026/09/11 01:15:20 [TRACE] Waiting 10s before next try
2026-09-11T01:15:30.9337483Z 2026/09/11 01:15:30 [TRACE] Waiting 1m0s before next try
2026-09-11T01:16:31.2733307Z 2026/09/11 01:16:31 [TRACE] Waiting 10s before next try
2026-09-11T01:16:41.5108334Z 2026/09/11 01:16:41 [TRACE] Waiting 1m0s before next try
2026-09-11T01:17:41.8550054Z 2026/09/11 01:17:41 [TRACE] Waiting 10s before next try
2026-09-11T01:17:52.0848957Z 2026/09/11 01:17:52 [TRACE] Waiting 1m0s before next try
2026-09-11T01:18:52.4323772Z 2026/09/11 01:18:52 [TRACE] Waiting 10s before next try
2026-09-11T01:19:02.6457234Z 2026/09/11 01:19:02 [TRACE] Waiting 1m0s before next try
2026-09-11T01:20:03.1892757Z 2026/09/11 01:20:03 [TRACE] Waiting 10s before next try
2026-09-11T01:20:13.4242612Z 2026/09/11 01:20:13 [TRACE] Waiting 1m0s before next try
2026-09-11T01:21:13.8199661Z 2026/09/11 01:21:13 [TRACE] Waiting 10s before next try
2026-09-11T01:21:24.0550057Z 2026/09/11 01:21:24 [TRACE] Waiting 1m0s before next try
2026-09-11T01:22:24.4391948Z 2026/09/11 01:22:24 [TRACE] Waiting 10s before next try
2026-09-11T01:22:34.6687040Z 2026/09/11 01:22:34 [TRACE] Waiting 1m0s before next try
2026-09-11T01:23:35.0379253Z 2026/09/11 01:23:35 [TRACE] Waiting 10s before next try
2026-09-11T01:23:45.2640788Z 2026/09/11 01:23:45 [TRACE] Waiting 1m0s before next try
2026-09-11T01:24:45.6483871Z 2026/09/11 01:24:45 [TRACE] Waiting 10s before next try
2026-09-11T01:24:55.8800802Z 2026/09/11 01:24:55 [TRACE] Waiting 1m0s before next try
2026-09-11T01:25:56.3766527Z 2026/09/11 01:25:56 [TRACE] Waiting 10s before next try
2026-09-11T01:26:06.6158914Z 2026/09/11 01:26:06 [TRACE] Waiting 1m0s before next try
2026-09-11T01:27:07.0138171Z 2026/09/11 01:27:07 [TRACE] Waiting 10s before next try
2026-09-11T01:27:17.2992705Z 2026/09/11 01:27:17 [TRACE] Waiting 1m0s before next try
2026-09-11T01:28:18.4717258Z 2026/09/11 01:28:18 [TRACE] Waiting 10s before next try
2026-09-11T01:28:28.7212481Z 2026/09/11 01:28:28 [TRACE] Waiting 1m0s before next try
2026-09-11T01:29:29.4363505Z 2026/09/11 01:29:29 [TRACE] Waiting 10s before next try
2026-09-11T01:29:39.6443051Z 2026/09/11 01:29:39 [TRACE] Waiting 1m0s before next try
2026-09-11T01:30:39.9902943Z 2026/09/11 01:30:39 [TRACE] Waiting 10s before next try
2026-09-11T01:30:50.2063178Z 2026/09/11 01:30:50 [TRACE] Waiting 1m0s before next try
2026-09-11T01:31:50.6149063Z 2026/09/11 01:31:50 [TRACE] Waiting 10s before next try
2026-09-11T01:32:00.8243383Z 2026/09/11 01:32:00 [TRACE] Waiting 1m0s before next try
2026-09-11T01:33:01.1371921Z 2026/09/11 01:33:01 [TRACE] Waiting 10s before next try
2026-09-11T01:33:11.3757864Z 2026/09/11 01:33:11 [TRACE] Waiting 1m0s before next try
2026-09-11T01:34:11.8131161Z 2026/09/11 01:34:11 [TRACE] Waiting 10s before next try
2026-09-11T01:34:22.0450836Z 2026/09/11 01:34:22 [TRACE] Waiting 1m0s before next try
2026-09-11T01:35:22.4658468Z 2026/09/11 01:35:22 [TRACE] Waiting 10s before next try
2026-09-11T01:35:32.7227903Z 2026/09/11 01:35:32 [TRACE] Waiting 1m0s before next try
2026-09-11T01:36:33.1899130Z 2026/09/11 01:36:33 [TRACE] Waiting 10s before next try
2026-09-11T01:36:43.4583273Z 2026/09/11 01:36:43 [TRACE] Waiting 1m0s before next try
2026-09-11T01:37:43.8398919Z 2026/09/11 01:37:43 [TRACE] Waiting 10s before next try
2026-09-11T01:37:54.0709903Z 2026/09/11 01:37:54 [TRACE] Waiting 1m0s before next try
2026-09-11T01:38:54.4726815Z 2026/09/11 01:38:54 [TRACE] Waiting 10s before next try
2026-09-11T01:39:04.7057140Z 2026/09/11 01:39:04 [TRACE] Waiting 1m0s before next try
2026-09-11T01:40:05.0387555Z 2026/09/11 01:40:05 [TRACE] Waiting 10s before next try
2026-09-11T01:40:15.2642600Z 2026/09/11 01:40:15 [TRACE] Waiting 1m0s before next try
2026-09-11T01:41:15.6154668Z 2026/09/11 01:41:15 [TRACE] Waiting 10s before next try
2026-09-11T01:41:25.8593344Z 2026/09/11 01:41:25 [TRACE] Waiting 1m0s before next try
2026-09-11T01:41:50.6479717Z 2026/09/11 01:41:50 [WARN] WaitForState timeout after 1h0m0s
2026-09-11T01:41:50.6480481Z 2026/09/11 01:41:50 [WARN] WaitForState starting 30s refresh grace period
2026-09-11T01:41:50.6483206Z     resource_search_index_migration_test.go:11: 
2026-09-11T01:41:50.6484771Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:68
2026-09-11T01:41:50.6489361Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-09-11T01:41:50.6492056Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:179
2026-09-11T01:41:50.6494802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:275
2026-09-11T01:41:50.6497370Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2026-09-11T01:41:50.6498686Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-09-11T01:41:50.6499219Z         	Error:      	Received unexpected error:
2026-09-11T01:41:50.6500431Z         	            	cluster creation failed: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-09-11T01:41:50.6501123Z         	Test:       	TestMigSearchIndex_basic
2026-09-11T01:41:50.6501842Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7715158614201077927
2026-09-11T01:41:50.6502330Z --- FAIL: TestMigSearchIndex_basic (3604.52s)
```

  - FAIL 23 minutes

### Error 2026-09-11T06:40:34+00:00
```
2026-09-11T06:40:34.4559927Z === RUN   TestMigSearchIndex_basic
2026-09-11T06:40:34.4562046Z     resource_search_index_migration_test.go:11: Creating execution project (1): test-acc-tf-p-208324949257881472
2026-09-11T06:40:37.0725944Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-5278600439134204922
2026-09-11T06:40:37.9174616Z 2026/09/11 06:40:37 [DEBUG] Waiting for state to become: [IDLE]
2026-09-11T06:43:38.3375330Z 2026/09/11 06:43:38 [TRACE] Waiting 1m0s before next try
2026-09-11T06:44:38.8936503Z 2026/09/11 06:44:38 [TRACE] Waiting 10s before next try
2026-09-11T06:44:49.4626617Z 2026/09/11 06:44:49 [TRACE] Waiting 1m0s before next try
2026-09-11T06:45:49.9958732Z 2026/09/11 06:45:49 [TRACE] Waiting 10s before next try
2026-09-11T06:46:00.2426344Z 2026/09/11 06:46:00 [TRACE] Waiting 1m0s before next try
2026-09-11T06:47:00.6514353Z 2026/09/11 06:47:00 [TRACE] Waiting 10s before next try
2026-09-11T06:47:10.9406789Z 2026/09/11 06:47:10 [TRACE] Waiting 1m0s before next try
2026-09-11T06:48:11.3112051Z 2026/09/11 06:48:11 [TRACE] Waiting 10s before next try
2026-09-11T06:48:21.5637370Z 2026/09/11 06:48:21 [TRACE] Waiting 1m0s before next try
2026-09-11T06:49:21.9380471Z 2026/09/11 06:49:21 [TRACE] Waiting 10s before next try
2026-09-11T06:49:32.2106666Z 2026/09/11 06:49:32 [TRACE] Waiting 1m0s before next try
2026-09-11T06:50:32.6302740Z 2026/09/11 06:50:32 [TRACE] Waiting 10s before next try
2026-09-11T06:50:42.8763140Z 2026/09/11 06:50:42 [TRACE] Waiting 1m0s before next try
2026-09-11T06:51:43.2859036Z 2026/09/11 06:51:43 [TRACE] Waiting 10s before next try
2026-09-11T06:51:53.5287698Z 2026/09/11 06:51:53 [TRACE] Waiting 1m0s before next try
2026-09-11T06:52:53.9298283Z 2026/09/11 06:52:53 [TRACE] Waiting 10s before next try
2026-09-11T06:53:04.1677896Z 2026/09/11 06:53:04 [TRACE] Waiting 1m0s before next try
2026-09-11T06:54:04.5854819Z 2026/09/11 06:54:04 [TRACE] Waiting 10s before next try
2026-09-11T06:54:14.8290829Z 2026/09/11 06:54:14 [TRACE] Waiting 1m0s before next try
2026-09-11T06:55:15.2041070Z 2026/09/11 06:55:15 [TRACE] Waiting 10s before next try
2026-09-11T06:55:25.4602313Z 2026/09/11 06:55:25 [TRACE] Waiting 1m0s before next try
2026-09-11T06:56:26.1142006Z 2026/09/11 06:56:26 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-11T06:57:26.4330020Z 2026/09/11 06:57:26 [TRACE] Waiting 1m0s before next try
2026-09-11T06:58:26.7580748Z 2026/09/11 06:58:26 [TRACE] Waiting 10s before next try
2026-09-11T06:58:36.9518137Z 2026/09/11 06:58:36 [TRACE] Waiting 1m0s before next try
2026-09-11T06:59:37.2984215Z 2026/09/11 06:59:37 [TRACE] Waiting 10s before next try
2026-09-11T06:59:47.4874342Z 2026/09/11 06:59:47 [TRACE] Waiting 1m0s before next try
2026-09-11T07:00:47.7715045Z 2026/09/11 07:00:47 [TRACE] Waiting 10s before next try
2026-09-11T07:00:58.0130432Z 2026/09/11 07:00:58 [TRACE] Waiting 1m0s before next try
2026-09-11T07:01:58.3305593Z 2026/09/11 07:01:58 [TRACE] Waiting 10s before next try
2026-09-11T07:02:08.5390646Z 2026/09/11 07:02:08 [TRACE] Waiting 1m0s before next try
2026-09-11T07:03:08.8306374Z 2026/09/11 07:03:08 [TRACE] Waiting 10s before next try
2026-09-11T07:03:19.0251806Z 2026/09/11 07:03:19 [TRACE] Waiting 1m0s before next try
2026-09-11T07:04:19.3667525Z     resource_search_index_migration_test.go:11: 
2026-09-11T07:04:19.3668759Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:04:19.3674836Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:275
2026-09-11T07:04:19.3676915Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2026-09-11T07:04:19.3677712Z         	Error:      	Received unexpected error:
2026-09-11T07:04:19.3678994Z         	            	sample dataset load 6aa3a61a821e0ea7a4600136 failed for cluster 6aa3a262f7fcc4bbebf4a2f2:test-acc-tf-c-5278600439134204922
2026-09-11T07:04:19.3679691Z         	Test:       	TestMigSearchIndex_basic
2026-09-11T07:04:19.3680090Z --- FAIL: TestMigSearchIndex_basic (1424.91s)
```

- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 18 minutes
- 2026-09-15: MISSING
- 2026-09-16 PASS 20 minutes
- 2026-09-17: MISSING
- 2026-09-18 PASS 19 minutes
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21 PASS 23 minutes
- 2026-09-22: MISSING
- 2026-09-23
  - FAIL 15 minutes

### Error 2026-09-23T00:40:29+00:00
```
2026-09-23T00:40:29.6054881Z === RUN   TestMigSearchIndex_basic
2026-09-23T00:40:29.6056803Z     resource_search_index_migration_test.go:11: Creating execution project (1): test-acc-tf-p-1071569855866281035
2026-09-23T00:40:32.0525985Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-6409859478682822162
2026-09-23T00:40:32.7598197Z 2026/09/23 00:40:32 [DEBUG] Waiting for state to become: [IDLE]
2026-09-23T00:43:32.9663684Z 2026/09/23 00:43:32 [TRACE] Waiting 1m0s before next try
2026-09-23T00:44:33.1998520Z 2026/09/23 00:44:33 [TRACE] Waiting 10s before next try
2026-09-23T00:44:43.3484430Z 2026/09/23 00:44:43 [TRACE] Waiting 1m0s before next try
2026-09-23T00:45:43.6233963Z 2026/09/23 00:45:43 [TRACE] Waiting 10s before next try
2026-09-23T00:45:53.7941977Z 2026/09/23 00:45:53 [TRACE] Waiting 1m0s before next try
2026-09-23T00:46:54.0429181Z 2026/09/23 00:46:54 [TRACE] Waiting 10s before next try
2026-09-23T00:47:04.1849936Z 2026/09/23 00:47:04 [TRACE] Waiting 1m0s before next try
2026-09-23T00:48:04.3915841Z 2026/09/23 00:48:04 [TRACE] Waiting 10s before next try
2026-09-23T00:48:14.5693674Z 2026/09/23 00:48:14 [TRACE] Waiting 1m0s before next try
2026-09-23T00:49:14.8521487Z 2026/09/23 00:49:14 [TRACE] Waiting 10s before next try
2026-09-23T00:49:25.0652075Z 2026/09/23 00:49:25 [TRACE] Waiting 1m0s before next try
2026-09-23T00:50:25.5812558Z 2026/09/23 00:50:25 [TRACE] Waiting 10s before next try
2026-09-23T00:50:35.7449685Z 2026/09/23 00:50:35 [TRACE] Waiting 1m0s before next try
2026-09-23T00:51:35.9290323Z 2026/09/23 00:51:35 [TRACE] Waiting 10s before next try
2026-09-23T00:51:46.1276870Z 2026/09/23 00:51:46 [TRACE] Waiting 1m0s before next try
2026-09-23T00:52:46.3060315Z 2026/09/23 00:52:46 [TRACE] Waiting 10s before next try
2026-09-23T00:52:56.4612465Z 2026/09/23 00:52:56 [TRACE] Waiting 1m0s before next try
2026-09-23T00:53:56.7789408Z 2026/09/23 00:53:56 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-23T00:54:56.9195410Z 2026/09/23 00:54:56 [TRACE] Waiting 1m0s before next try
2026-09-23T00:55:57.0875849Z     resource_search_index_migration_test.go:11: 
2026-09-23T00:55:57.0878474Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.0887163Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:276
2026-09-23T00:55:57.0891726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2026-09-23T00:55:57.0894135Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.0897808Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.0899572Z         	Test:       	TestMigSearchIndex_basic
2026-09-23T00:55:57.0900176Z --- FAIL: TestMigSearchIndex_basic (927.48s)
```

  - FAIL 14 minutes

### Error 2026-09-23T08:25:38+00:00
```
2026-09-23T08:25:38.9250263Z === RUN   TestMigSearchIndex_basic
2026-09-23T08:25:38.9252760Z     resource_search_index_migration_test.go:11: Creating execution project (1): test-acc-tf-p-6183661432462647477
2026-09-23T08:25:41.6270188Z     resource_search_index_migration_test.go:11: Creating execution cluster: test-acc-tf-c-1663078595888584301
2026-09-23T08:25:42.5052880Z 2026/09/23 08:25:42 [DEBUG] Waiting for state to become: [IDLE]
2026-09-23T08:28:42.7951243Z 2026/09/23 08:28:42 [TRACE] Waiting 1m0s before next try
2026-09-23T08:29:43.1137847Z 2026/09/23 08:29:43 [TRACE] Waiting 10s before next try
2026-09-23T08:29:53.3145295Z 2026/09/23 08:29:53 [TRACE] Waiting 1m0s before next try
2026-09-23T08:30:53.6450143Z 2026/09/23 08:30:53 [TRACE] Waiting 10s before next try
2026-09-23T08:31:03.8492398Z 2026/09/23 08:31:03 [TRACE] Waiting 1m0s before next try
2026-09-23T08:32:04.2057397Z 2026/09/23 08:32:04 [TRACE] Waiting 10s before next try
2026-09-23T08:32:14.4265933Z 2026/09/23 08:32:14 [TRACE] Waiting 1m0s before next try
2026-09-23T08:33:14.7805219Z 2026/09/23 08:33:14 [TRACE] Waiting 10s before next try
2026-09-23T08:33:24.9962511Z 2026/09/23 08:33:24 [TRACE] Waiting 1m0s before next try
2026-09-23T08:34:25.4409196Z 2026/09/23 08:34:25 [TRACE] Waiting 10s before next try
2026-09-23T08:34:35.6276027Z 2026/09/23 08:34:35 [TRACE] Waiting 1m0s before next try
2026-09-23T08:35:35.9200025Z 2026/09/23 08:35:35 [TRACE] Waiting 10s before next try
2026-09-23T08:35:46.1289153Z 2026/09/23 08:35:46 [TRACE] Waiting 1m0s before next try
2026-09-23T08:36:46.5563195Z 2026/09/23 08:36:46 [TRACE] Waiting 10s before next try
2026-09-23T08:36:56.7554756Z 2026/09/23 08:36:56 [TRACE] Waiting 1m0s before next try
2026-09-23T08:37:57.1979939Z 2026/09/23 08:37:57 [TRACE] Waiting 10s before next try
2026-09-23T08:38:07.4229539Z 2026/09/23 08:38:07 [TRACE] Waiting 1m0s before next try
2026-09-23T08:39:08.0623832Z 2026/09/23 08:39:08 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-23T08:40:08.2762348Z     resource_search_index_migration_test.go:11: 
2026-09-23T08:40:08.2764121Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2769411Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:276
2026-09-23T08:40:08.2771943Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_migration_test.go:11
2026-09-23T08:40:08.2773437Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2775647Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2776872Z         	Test:       	TestMigSearchIndex_basic
2026-09-23T08:40:08.2777347Z --- FAIL: TestMigSearchIndex_basic (869.35s)
```

- 2026-09-24: MISSING
- 2026-09-25 PASS 19 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 16 minutes
- 2026-09-29: MISSING
- 2026-09-30 PASS 18 minutes
- 2026-10-01: MISSING
- 2026-10-02 PASS 20 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 15 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 17 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 16 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 16 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 18 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 16 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
