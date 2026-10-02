# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-10 00:40](#error-2026-09-10t0040210000) |  | dev |  | 869.08s
[2026-09-11 07:04](#error-2026-09-11t0704190000) |  | dev |  | 0.00s
[2026-09-19 00:41](#error-2026-09-19t0041040000) |  | dev | timeout | 1778.00s
[2026-09-23 00:55](#error-2026-09-23t0055570000) |  | dev |  | 0.00s
[2026-09-23 08:40](#error-2026-09-23t0840080000) |  | dev |  | 0.00s
[2026-09-24 00:42](#error-2026-09-24t0042200000) |  | dev |  | 1360.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 16 seconds
- 2026-09-03 PASS 27 minutes
- 2026-09-04 PASS 15 seconds
- 2026-09-05 PASS 22 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 14 seconds
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
- 2026-09-15 PASS 27 minutes
- 2026-09-16 PASS 14 seconds
- 2026-09-17 PASS 27 minutes
- 2026-09-18 PASS 15 seconds
- 2026-09-19

### Error 2026-09-19T00:41:04+00:00
```
2026-09-19T00:41:04.1719648Z === RUN   TestAccSearchIndex_basic
2026-09-19T00:41:04.1725828Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-382501691940052143
2026-09-19T00:41:06.7079048Z     resource_search_index_test.go:17: Creating execution cluster: test-acc-tf-c-6988159625950922100
2026-09-19T00:41:07.4962766Z 2026/09/19 00:41:07 [DEBUG] Waiting for state to become: [IDLE]
2026-09-19T00:44:07.7332164Z 2026/09/19 00:44:07 [TRACE] Waiting 1m0s before next try
2026-09-19T00:45:08.0213002Z 2026/09/19 00:45:08 [TRACE] Waiting 10s before next try
2026-09-19T00:45:18.1916179Z 2026/09/19 00:45:18 [TRACE] Waiting 1m0s before next try
2026-09-19T00:46:18.4548489Z 2026/09/19 00:46:18 [TRACE] Waiting 10s before next try
2026-09-19T00:46:28.6129981Z 2026/09/19 00:46:28 [TRACE] Waiting 1m0s before next try
2026-09-19T00:47:28.9455308Z 2026/09/19 00:47:28 [TRACE] Waiting 10s before next try
2026-09-19T00:47:39.1062817Z 2026/09/19 00:47:39 [TRACE] Waiting 1m0s before next try
2026-09-19T00:48:39.4233746Z 2026/09/19 00:48:39 [TRACE] Waiting 10s before next try
2026-09-19T00:48:49.5590116Z 2026/09/19 00:48:49 [TRACE] Waiting 1m0s before next try
2026-09-19T00:49:49.9232995Z 2026/09/19 00:49:49 [TRACE] Waiting 10s before next try
2026-09-19T00:50:00.0862798Z 2026/09/19 00:50:00 [TRACE] Waiting 1m0s before next try
2026-09-19T00:51:00.3524348Z 2026/09/19 00:51:00 [TRACE] Waiting 10s before next try
2026-09-19T00:51:10.5025894Z 2026/09/19 00:51:10 [TRACE] Waiting 1m0s before next try
2026-09-19T00:52:10.7295459Z 2026/09/19 00:52:10 [TRACE] Waiting 10s before next try
2026-09-19T00:52:20.8857213Z 2026/09/19 00:52:20 [TRACE] Waiting 1m0s before next try
2026-09-19T00:53:21.1211942Z 2026/09/19 00:53:21 [TRACE] Waiting 10s before next try
2026-09-19T00:53:31.2679651Z 2026/09/19 00:53:31 [TRACE] Waiting 1m0s before next try
2026-09-19T00:54:31.6703045Z 2026/09/19 00:54:31 [TRACE] Waiting 10s before next try
2026-09-19T00:54:41.8116710Z 2026/09/19 00:54:41 [TRACE] Waiting 1m0s before next try
2026-09-19T00:55:42.1778607Z 2026/09/19 00:55:42 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-19T00:56:42.3146161Z 2026/09/19 00:56:42 [TRACE] Waiting 1m0s before next try
2026-09-19T00:57:42.5631514Z 2026/09/19 00:57:42 [TRACE] Waiting 10s before next try
2026-09-19T00:57:52.6597516Z 2026/09/19 00:57:52 [TRACE] Waiting 1m0s before next try
2026-09-19T00:58:52.8291262Z 2026/09/19 00:58:52 [TRACE] Waiting 10s before next try
2026-09-19T00:59:02.9275329Z 2026/09/19 00:59:02 [TRACE] Waiting 1m0s before next try
2026-09-19T01:00:03.2450140Z 2026/09/19 01:00:03 [TRACE] Waiting 10s before next try
2026-09-19T01:00:13.3368457Z 2026/09/19 01:00:13 [TRACE] Waiting 1m0s before next try
2026-09-19T01:01:13.4993023Z 2026/09/19 01:01:13 [TRACE] Waiting 10s before next try
2026-09-19T01:01:23.5903595Z 2026/09/19 01:01:23 [TRACE] Waiting 1m0s before next try
2026-09-19T01:02:23.7434514Z 2026/09/19 01:02:23 [TRACE] Waiting 10s before next try
2026-09-19T01:02:33.8355582Z 2026/09/19 01:02:33 [TRACE] Waiting 1m0s before next try
2026-09-19T01:03:33.9720277Z 2026/09/19 01:03:33 [TRACE] Waiting 10s before next try
2026-09-19T01:03:44.0692099Z 2026/09/19 01:03:44 [TRACE] Waiting 1m0s before next try
2026-09-19T01:04:44.2681017Z 2026/09/19 01:04:44 [TRACE] Waiting 10s before next try
2026-09-19T01:04:54.3553178Z 2026/09/19 01:04:54 [TRACE] Waiting 1m0s before next try
2026-09-19T01:05:54.5340518Z 2026/09/19 01:05:54 [TRACE] Waiting 10s before next try
2026-09-19T01:06:04.6170422Z 2026/09/19 01:06:04 [TRACE] Waiting 1m0s before next try
2026-09-19T01:07:04.8650233Z 2026/09/19 01:07:04 [TRACE] Waiting 10s before next try
2026-09-19T01:07:14.9532394Z 2026/09/19 01:07:14 [TRACE] Waiting 1m0s before next try
2026-09-19T01:08:15.2775835Z 2026/09/19 01:08:15 [TRACE] Waiting 10s before next try
2026-09-19T01:08:25.3604845Z 2026/09/19 01:08:25 [TRACE] Waiting 1m0s before next try
2026-09-19T01:09:25.5477268Z 2026/09/19 01:09:25 [TRACE] Waiting 10s before next try
2026-09-19T01:09:35.6240246Z 2026/09/19 01:09:35 [TRACE] Waiting 1m0s before next try
2026-09-19T01:10:35.8258919Z 2026/09/19 01:10:35 [TRACE] Waiting 10s before next try
2026-09-19T01:10:42.1789006Z 2026/09/19 01:10:42 [WARN] WaitForState timeout after 15m0s
2026-09-19T01:10:42.1789781Z 2026/09/19 01:10:42 [WARN] WaitForState starting 30s refresh grace period
2026-09-19T01:10:42.1790680Z     resource_search_index_test.go:17: 
2026-09-19T01:10:42.1792859Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:10:42.1795875Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:275
2026-09-19T01:10:42.1799213Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-09-19T01:10:42.1800631Z         	Error:      	Received unexpected error:
2026-09-19T01:10:42.1802573Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:10:42.1803683Z         	Test:       	TestAccSearchIndex_basic
2026-09-19T01:10:42.1804265Z --- FAIL: TestAccSearchIndex_basic (1778.01s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS 14 seconds
- 2026-09-22 PASS 19 minutes
- 2026-09-23
  - FAIL unknown

### Error 2026-09-23T00:55:57+00:00
```
2026-09-23T00:55:57.0915582Z === RUN   TestAccSearchIndex_basic
2026-09-23T00:55:57.0915967Z     resource_search_index_test.go:17: 
2026-09-23T00:55:57.0917032Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T00:55:57.0920529Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:276
2026-09-23T00:55:57.0922908Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-09-23T00:55:57.0924146Z         	Error:      	Received unexpected error:
2026-09-23T00:55:57.0926069Z         	            	sample dataset load 6ab32324aad6f205c425e84b failed for cluster 6ab31ffd653bb1f6237cf617:test-acc-tf-c-6409859478682822162: Target cluster does not have enough free space to import dataset
2026-09-23T00:55:57.0927043Z         	Test:       	TestAccSearchIndex_basic
2026-09-23T00:55:57.0927396Z --- FAIL: TestAccSearchIndex_basic (0.00s)
```

  - FAIL unknown

### Error 2026-09-23T08:40:08+00:00
```
2026-09-23T08:40:08.2789256Z === RUN   TestAccSearchIndex_basic
2026-09-23T08:40:08.2789571Z     resource_search_index_test.go:17: 
2026-09-23T08:40:08.2790604Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-23T08:40:08.2792173Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:276
2026-09-23T08:40:08.2793742Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-09-23T08:40:08.2794622Z         	Error:      	Received unexpected error:
2026-09-23T08:40:08.2796273Z         	            	sample dataset load 6ab3902caa941871fb3d3e92 failed for cluster 6ab38d03f8a29abe2358b1c1:test-acc-tf-c-1663078595888584301: Target cluster does not have enough free space to import dataset
2026-09-23T08:40:08.2797156Z         	Test:       	TestAccSearchIndex_basic
2026-09-23T08:40:08.2797507Z --- FAIL: TestAccSearchIndex_basic (0.00s)
```

- 2026-09-24

### Error 2026-09-24T00:42:20+00:00
```
2026-09-24T00:42:20.4274408Z === RUN   TestAccSearchIndex_basic
2026-09-24T00:42:20.4276048Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-5919363831768544258
2026-09-24T00:42:23.8384306Z     resource_search_index_test.go:17: Creating execution cluster: test-acc-tf-c-6135106944150983263
2026-09-24T00:42:24.7137885Z 2026/09/24 00:42:24 [DEBUG] Waiting for state to become: [IDLE]
2026-09-24T00:45:25.0030141Z 2026/09/24 00:45:25 [TRACE] Waiting 1m0s before next try
2026-09-24T00:46:25.2188188Z 2026/09/24 00:46:25 [TRACE] Waiting 10s before next try
2026-09-24T00:46:35.3576508Z 2026/09/24 00:46:35 [TRACE] Waiting 1m0s before next try
2026-09-24T00:47:35.6415568Z 2026/09/24 00:47:35 [TRACE] Waiting 10s before next try
2026-09-24T00:47:45.7902009Z 2026/09/24 00:47:45 [TRACE] Waiting 1m0s before next try
2026-09-24T00:48:46.0205253Z 2026/09/24 00:48:46 [TRACE] Waiting 10s before next try
2026-09-24T00:48:56.1637859Z 2026/09/24 00:48:56 [TRACE] Waiting 1m0s before next try
2026-09-24T00:49:56.3741753Z 2026/09/24 00:49:56 [TRACE] Waiting 10s before next try
2026-09-24T00:50:06.5245629Z 2026/09/24 00:50:06 [TRACE] Waiting 1m0s before next try
2026-09-24T00:51:06.8396952Z 2026/09/24 00:51:06 [TRACE] Waiting 10s before next try
2026-09-24T00:51:16.9866494Z 2026/09/24 00:51:16 [TRACE] Waiting 1m0s before next try
2026-09-24T00:52:17.1763701Z 2026/09/24 00:52:17 [TRACE] Waiting 10s before next try
2026-09-24T00:52:27.3358718Z 2026/09/24 00:52:27 [TRACE] Waiting 1m0s before next try
2026-09-24T00:53:27.5838294Z 2026/09/24 00:53:27 [TRACE] Waiting 10s before next try
2026-09-24T00:53:37.7309418Z 2026/09/24 00:53:37 [TRACE] Waiting 1m0s before next try
2026-09-24T00:54:37.9601534Z 2026/09/24 00:54:37 [TRACE] Waiting 10s before next try
2026-09-24T00:54:48.1302863Z 2026/09/24 00:54:48 [TRACE] Waiting 1m0s before next try
2026-09-24T00:55:48.3789305Z 2026/09/24 00:55:48 [TRACE] Waiting 10s before next try
2026-09-24T00:55:58.5374156Z 2026/09/24 00:55:58 [TRACE] Waiting 1m0s before next try
2026-09-24T00:56:59.0409602Z 2026/09/24 00:56:59 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-24T00:57:59.2855230Z 2026/09/24 00:57:59 [TRACE] Waiting 1m0s before next try
2026-09-24T00:58:59.4675836Z 2026/09/24 00:58:59 [TRACE] Waiting 10s before next try
2026-09-24T00:59:09.5421358Z 2026/09/24 00:59:09 [TRACE] Waiting 1m0s before next try
2026-09-24T01:00:09.6711189Z 2026/09/24 01:00:09 [TRACE] Waiting 10s before next try
2026-09-24T01:00:19.7445386Z 2026/09/24 01:00:19 [TRACE] Waiting 1m0s before next try
2026-09-24T01:01:19.8738406Z 2026/09/24 01:01:19 [TRACE] Waiting 10s before next try
2026-09-24T01:01:29.9531220Z 2026/09/24 01:01:29 [TRACE] Waiting 1m0s before next try
2026-09-24T01:02:30.0799027Z 2026/09/24 01:02:30 [TRACE] Waiting 10s before next try
2026-09-24T01:02:40.1547954Z 2026/09/24 01:02:40 [TRACE] Waiting 1m0s before next try
2026-09-24T01:03:40.2473620Z 2026/09/24 01:03:40 [TRACE] Waiting 10s before next try
2026-09-24T01:03:50.3210962Z 2026/09/24 01:03:50 [TRACE] Waiting 1m0s before next try
2026-09-24T01:04:50.5173771Z 2026/09/24 01:04:50 [TRACE] Waiting 10s before next try
2026-09-24T01:05:00.7944191Z    test_terraform_path=/home/runner/work/_temp/65314072-54ef-40bb-880b-1a2cfea0de4d/terraform test_name=TestAccSearchIndex_basic test_working_directory=/tmp/plugintest1658911292 test_step_number=1
2026-09-24T01:05:00.7945781Z     resource_search_index_test.go:17: Step 1/2 error: Error running pre-apply plan: exit status 1
2026-09-24T01:05:00.7946508Z         
2026-09-24T01:05:00.7947326Z         Error: Argument or block definition required
2026-09-24T01:05:00.7948443Z         
2026-09-24T01:05:00.7949061Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:00.7949601Z           25: 			lucene.standard
2026-09-24T01:05:00.7949898Z         
2026-09-24T01:05:00.7950405Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:00.7950970Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:00.8172208Z   
2026-09-24T01:05:00.8172796Z     panic.go:694: Error retrieving state, there may be dangling resources: exit status 1
2026-09-24T01:05:00.8173495Z         
2026-09-24T01:05:00.8173857Z         Error: Argument or block definition required
2026-09-24T01:05:00.8174247Z         
2026-09-24T01:05:00.8175158Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_search_index" "test":
2026-09-24T01:05:00.8175933Z           25: 			lucene.standard
2026-09-24T01:05:00.8176218Z         
2026-09-24T01:05:00.8176734Z         An argument or block definition is required here. To set an argument, use the
2026-09-24T01:05:00.8177308Z         equals sign "=" to introduce the argument value.
2026-09-24T01:05:00.8178031Z --- FAIL: TestAccSearchIndex_basic (1360.39s)
```

- 2026-09-25 PASS 15 seconds
- 2026-09-26 PASS 22 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 10 seconds
- 2026-09-29 PASS 18 minutes
- 2026-09-30 PASS 10 seconds
- 2026-10-01 PASS 16 minutes
- 2026-10-02 PASS 10 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 14 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 13 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 14 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 14 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 9 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 10 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
