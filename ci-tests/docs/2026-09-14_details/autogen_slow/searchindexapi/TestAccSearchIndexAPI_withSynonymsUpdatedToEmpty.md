# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, FAIL(x 5) PASS(x 4)
Success rate: 44.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 10803.04s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 1774.02s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s
[2026-09-14 05:47](#error-2026-09-14t0547030000) |  | dev | timeout | 10803.09s

### Timeline
- 2026-09-07 PASS an hour
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


## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 34 minutes
- 2026-09-14: MISSING
