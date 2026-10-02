# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 16) SKIP(x 11) FAIL(x 10)
Success rate: 61.54%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 10803.03s
[2026-09-03 05:44](#error-2026-09-03t0544170000) |  | dev | timeout | 10804.07s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 10803.04s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 1774.02s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s
[2026-09-14 05:47](#error-2026-09-14t0547030000) |  | dev | timeout | 10803.09s
[2026-09-18 05:16](#error-2026-09-18t0516190000) |  | dev | timeout | 10804.01s
[2026-09-19 01:30](#error-2026-09-19t0130400000) |  | dev | timeout | 0.00s
[2026-09-22 12:46](#error-2026-09-22t1246470000) |  | dev | timeout | 10805.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1904877Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-02T04:59:00.1924156Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-02T04:59:00.1999872Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-02T04:59:00.2002878Z     resource_test.go:54: Step 1/1 error: Error running apply: exit status 1
2026-09-02T04:59:00.2003561Z         
2026-09-02T04:59:00.2004151Z         Error: Error waiting for changes in Create
2026-09-02T04:59:00.2004696Z         
2026-09-02T04:59:00.2005309Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.2006611Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.2007906Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.2008412Z         
2026-09-02T04:59:00.2008740Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.2009211Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.2010769Z         index_id="6a9776737f32ed5349fdc8a2": timeout while waiting for state to
2026-09-02T04:59:00.2012235Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-02T04:59:00.2012959Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-02T04:59:00.2013683Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-02T04:59:00.2014242Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (10803.35s)
```

- 2026-09-03
  - FAIL 3 hours

### Error 2026-09-03T05:44:17+00:00
```
2026-09-03T05:44:17.7095247Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-03T05:44:17.7112994Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-03T05:44:17.7141145Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-03T05:44:17.7142100Z     resource_test.go:54: Step 1/1 error: Error running apply: exit status 1
2026-09-03T05:44:17.7142761Z         
2026-09-03T05:44:17.7143327Z         Error: Error waiting for changes in Create
2026-09-03T05:44:17.7143849Z         
2026-09-03T05:44:17.7144419Z           with mongodbatlas_search_index_api.test,
2026-09-03T05:44:17.7145593Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T05:44:17.7146696Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T05:44:17.7147260Z         
2026-09-03T05:44:17.7147774Z         group_id="6a98c2e18c6ee76bb0d54be9",
2026-09-03T05:44:17.7148523Z         cluster_name="test-acc-tf-c-5646429399751727716",
2026-09-03T05:44:17.7149512Z         index_id="6a98c757c4c2ba86c180a1cb": timeout while waiting for state to
2026-09-03T05:44:17.7150559Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-03T05:44:17.7152008Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T05:44:17.7153161Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T05:44:17.7154071Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (10804.74s)
```

  - PASS 56 minutes
- 2026-09-04 PASS an hour
- 2026-09-05 PASS an hour
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 55 minutes
  - PASS an hour
- 2026-09-08

### Error 2026-09-08T05:00:43+00:00
```
2026-09-08T05:00:43.6860980Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-08T05:00:43.6873368Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-08T05:00:43.6964896Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-08T05:00:43.6965490Z     resource_test.go:54: Step 1/1 error: Error running apply: exit status 1
2026-09-08T05:00:43.6965908Z         
2026-09-08T05:00:43.6966257Z         Error: Error waiting for changes in Create
2026-09-08T05:00:43.6966584Z         
2026-09-08T05:00:43.6966941Z           with mongodbatlas_search_index_api.test,
2026-09-08T05:00:43.6967650Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-08T05:00:43.6968334Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-08T05:00:43.6968687Z         
2026-09-08T05:00:43.6969002Z         group_id="6a9f5a9228da0e5fc08e7890",
2026-09-08T05:00:43.6969460Z         cluster_name="test-acc-tf-c-4534713065942648190",
2026-09-08T05:00:43.6970332Z         index_id="6a9f5f9228da0e5fc0901b44": timeout while waiting for state to
2026-09-08T05:00:43.6970979Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-08T05:00:43.6971641Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-08T05:00:43.6972353Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-08T05:00:43.6972914Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (10803.41s)
```

- 2026-09-09 PASS 27 minutes
- 2026-09-10

### Error 2026-09-10T01:33:06+00:00
```
2026-09-10T01:33:06.1274198Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-10T01:33:06.1274625Z     resource_test.go:51: 
2026-09-10T01:33:06.1275639Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T01:33:06.1279212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:51
2026-09-10T01:33:06.1280642Z         	Error:      	Received unexpected error:
2026-09-10T01:33:06.1281946Z         	            	sample dataset load 6aa201365b8d9510e89370dd failed for cluster 6aa1fcb04ab31ba34525537f:test-acc-tf-c-1596466085034706675
2026-09-10T01:33:06.1283222Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-10T01:33:06.1283801Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (0.00s)
```

- 2026-09-11
  - FAIL 29 minutes

### Error 2026-09-11T03:01:53+00:00
```
2026-09-11T03:01:53.1593937Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-11T03:01:53.1594419Z     resource_test.go:51: Creating execution cluster: test-acc-tf-c-6351649048286448748
2026-09-11T03:01:53.1594832Z 2026/09/11 01:41:53 [DEBUG] Waiting for state to become: [IDLE]
2026-09-11T03:01:53.1595169Z 2026/09/11 01:44:53 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1595478Z 2026/09/11 01:45:54 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1595786Z 2026/09/11 01:46:04 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1596080Z 2026/09/11 01:47:04 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1596514Z 2026/09/11 01:47:14 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1596817Z 2026/09/11 01:48:14 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1597117Z 2026/09/11 01:48:24 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1597416Z 2026/09/11 01:49:25 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1597711Z 2026/09/11 01:49:35 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1598005Z 2026/09/11 01:50:35 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1598298Z 2026/09/11 01:50:45 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1598591Z 2026/09/11 01:51:45 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1598885Z 2026/09/11 01:51:55 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1599176Z 2026/09/11 01:52:56 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1599471Z 2026/09/11 01:53:06 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1599765Z 2026/09/11 01:54:06 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1600057Z 2026/09/11 01:54:16 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1600348Z 2026/09/11 01:55:16 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1600641Z 2026/09/11 01:55:26 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1600978Z 2026/09/11 01:56:27 [DEBUG] Waiting for state to become: [COMPLETED]
2026-09-11T03:01:53.1601305Z 2026/09/11 01:57:27 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1601598Z 2026/09/11 01:58:27 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1601890Z 2026/09/11 01:58:37 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1602182Z 2026/09/11 01:59:37 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1602471Z 2026/09/11 01:59:47 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1602764Z 2026/09/11 02:00:47 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1603168Z 2026/09/11 02:00:57 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1603467Z 2026/09/11 02:01:58 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1603762Z 2026/09/11 02:02:08 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1604055Z 2026/09/11 02:03:08 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1604356Z 2026/09/11 02:03:18 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1604648Z 2026/09/11 02:04:18 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1604940Z 2026/09/11 02:04:28 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1605229Z 2026/09/11 02:05:28 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1605518Z 2026/09/11 02:05:38 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1605809Z 2026/09/11 02:06:38 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1606098Z 2026/09/11 02:06:48 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1606534Z 2026/09/11 02:07:49 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1606832Z 2026/09/11 02:07:59 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1607130Z 2026/09/11 02:08:59 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1607424Z 2026/09/11 02:09:09 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1607716Z 2026/09/11 02:10:09 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1608140Z 2026/09/11 02:10:19 [TRACE] Waiting 1m0s before next try
2026-09-11T03:01:53.1608448Z 2026/09/11 02:11:19 [TRACE] Waiting 10s before next try
2026-09-11T03:01:53.1608765Z 2026/09/11 02:11:27 [WARN] WaitForState timeout after 15m0s
2026-09-11T03:01:53.1609129Z 2026/09/11 02:11:27 [WARN] WaitForState starting 30s refresh grace period
2026-09-11T03:01:53.1609481Z     resource_test.go:51: 
2026-09-11T03:01:53.1610263Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T03:01:53.1611797Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:51
2026-09-11T03:01:53.1612454Z         	Error:      	Received unexpected error:
2026-09-11T03:01:53.1613281Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-11T03:01:53.1613853Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-11T03:01:53.1614259Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (1774.20s)
```

  - FAIL unknown

### Error 2026-09-11T07:31:03+00:00
```
2026-09-11T07:31:03.1956039Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-11T07:31:03.1956928Z     resource_test.go:51: 
2026-09-11T07:31:03.1958430Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:31:03.1961315Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:51
2026-09-11T07:31:03.1962608Z         	Error:      	Received unexpected error:
2026-09-11T07:31:03.1964532Z         	            	sample dataset load 6aa3a5fff7fcc4bbebf76935 failed for cluster 6aa3a28df7fcc4bbebf53df1:test-acc-tf-c-1260780199030207545
2026-09-11T07:31:03.1965739Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-11T07:31:03.1966510Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (0.00s)
```

- 2026-09-12 PASS 2 hours
- 2026-09-13: MISSING
- 2026-09-14

### Error 2026-09-14T05:47:03+00:00
```
2026-09-14T05:47:03.7431666Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-14T05:47:03.7451683Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-14T05:47:03.7526413Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-14T05:47:03.7527448Z     resource_test.go:54: Step 1/1 error: Error running apply: exit status 1
2026-09-14T05:47:03.7528159Z         
2026-09-14T05:47:03.7528842Z         Error: Error waiting for changes in Create
2026-09-14T05:47:03.7529401Z         
2026-09-14T05:47:03.7530030Z           with mongodbatlas_search_index_api.test,
2026-09-14T05:47:03.7531396Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-14T05:47:03.7532697Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-14T05:47:03.7533357Z         
2026-09-14T05:47:03.7533942Z         group_id="6aa74408d4e2b0ecbd5a8aa3",
2026-09-14T05:47:03.7534802Z         cluster_name="test-acc-tf-c-1429233515179452221",
2026-09-14T05:47:03.7536168Z         index_id="6aa74839d4e2b0ecbd5d5917": timeout while waiting for state to
2026-09-14T05:47:03.7537384Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-14T05:47:03.7538717Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-14T05:47:03.7540086Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-14T05:47:03.7541124Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (10803.86s)
```

- 2026-09-15 PASS 53 minutes
- 2026-09-16 PASS an hour
- 2026-09-17 PASS 31 minutes
- 2026-09-18

### Error 2026-09-18T05:16:19+00:00
```
2026-09-18T05:16:19.5404390Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-18T05:16:19.5413516Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-18T05:16:19.5497654Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-18T05:16:19.5498143Z     resource_test.go:54: Step 1/1 error: Error running apply: exit status 1
2026-09-18T05:16:19.5498484Z         
2026-09-18T05:16:19.5498801Z         Error: Error waiting for changes in Create
2026-09-18T05:16:19.5499081Z         
2026-09-18T05:16:19.5499408Z           with mongodbatlas_search_index_api.test,
2026-09-18T05:16:19.5500036Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-18T05:16:19.5500621Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-18T05:16:19.5500924Z         
2026-09-18T05:16:19.5501214Z         group_id="6aac88de1bd5f998a1452f76",
2026-09-18T05:16:19.5501621Z         cluster_name="test-acc-tf-c-3593569086852570367",
2026-09-18T05:16:19.5502153Z         index_id="6aac8efd2c5cbddf68bb801b": timeout while waiting for state to
2026-09-18T05:16:19.5502709Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-18T05:16:19.5503292Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-18T05:16:19.5504103Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-18T05:16:19.5504577Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (10804.06s)
```

- 2026-09-19

### Error 2026-09-19T01:30:40+00:00
```
2026-09-19T01:30:40.9188115Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-19T01:30:40.9188445Z     resource_test.go:51: 
2026-09-19T01:30:40.9189216Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:30:40.9190711Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:51
2026-09-19T01:30:40.9191370Z         	Error:      	Received unexpected error:
2026-09-19T01:30:40.9192168Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:30:40.9192731Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-19T01:30:40.9193121Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21 PASS an hour
- 2026-09-22
  - PASS 50 minutes
  - FAIL 3 hours

### Error 2026-09-22T12:46:47+00:00
```
2026-09-22T12:46:47.9739620Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-22T12:46:47.9758065Z === CONT  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-22T12:46:48.0009138Z === NAME  TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-09-22T12:46:48.0010198Z     resource_test.go:54: Step 1/1 error: Error running apply: exit status 1
2026-09-22T12:46:48.0010914Z         
2026-09-22T12:46:48.0011525Z         Error: Error waiting for changes in Create
2026-09-22T12:46:48.0012117Z         
2026-09-22T12:46:48.0013020Z           with mongodbatlas_search_index_api.test,
2026-09-22T12:46:48.0014343Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-22T12:46:48.0015595Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-22T12:46:48.0016239Z         
2026-09-22T12:46:48.0016820Z         group_id="6ab23b4fd135efc1a7edf95a",
2026-09-22T12:46:48.0017677Z         cluster_name="test-acc-tf-c-7202313398832200026",
2026-09-22T12:46:48.0018792Z         index_id="6ab24122d0fd092caf984faa": timeout while waiting for state to
2026-09-22T12:46:48.0019964Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-22T12:46:48.0021144Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-22T12:46:48.0022605Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-22T12:46:48.0026683Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (10805.49s)
```

- 2026-09-23 SKIP unknown
- 2026-09-24 SKIP unknown
- 2026-09-25 SKIP unknown
- 2026-09-26 SKIP unknown
- 2026-09-27: MISSING
- 2026-09-28 SKIP unknown
- 2026-09-29 SKIP unknown
- 2026-09-30 SKIP unknown
- 2026-10-01 SKIP unknown
- 2026-10-02 SKIP unknown

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 24 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 34 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 24 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 42 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 SKIP unknown
- 2026-09-28: MISSING
- 2026-09-29 SKIP unknown
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
