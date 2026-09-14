# search_index/searchindex/TestMigSearchIndex_basic Test Details
# Found 5 TestRuns in dev, qa from 2026-09-09 to 2026-09-14 from master branch: 1 unique tests, PASS(x 3) FAIL(x 2)
Success rate: 60.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-11 00:41](#error-2026-09-11t0041460000) |  | dev | timeout | 3604.05s
[2026-09-11 06:40](#error-2026-09-11t0640340000) |  | dev |  | 1424.09s

### Timeline
- 2026-09-07: MISSING
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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 17 minutes
- 2026-09-14: MISSING
