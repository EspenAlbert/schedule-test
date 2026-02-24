# search_index/searchindex/TestAccSearchIndex_updatedToEmptySynonyms Test Details
# Found 31 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2) TIMEOUT
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 05:07](#error-2026-01-31t0507360000) |  | dev |  | 97232.00s
[2026-02-03 00:39](#error-2026-02-03t0039220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters | dev | out_of_capacity | 0.05s
[2026-02-24 00:50](#error-2026-02-24t0050170000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/699cf29e8dfec41eaa845d3d/clusters/test-acc-tf-c-3544188480149776093/search/indexes | dev |  | 3.06s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 9 seconds
- 2026-01-27 PASS 8 seconds
- 2026-01-28 PASS 10 seconds
- 2026-01-29 PASS 10 seconds
- 2026-01-30 PASS 10 seconds
- 2026-01-31

### Error 2026-01-31T05:07:36+00:00
```
2026-01-31T05:07:36.7472357Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2026-01-31T05:07:36.7472990Z     resource_search_index_test.go:124: Creating execution cluster: test-acc-tf-c-6103657275990027484
2026-01-31T05:07:38.0104047Z 2026/01/31 05:07:38 [DEBUG] Waiting for state to become: [IDLE]
2026-01-31T05:10:38.4250030Z 2026/01/31 05:10:38 [TRACE] Waiting 1m0s before next try
2026-01-31T05:11:38.8468248Z 2026/01/31 05:11:38 [TRACE] Waiting 10s before next try
2026-01-31T05:11:49.1033462Z 2026/01/31 05:11:49 [TRACE] Waiting 1m0s before next try
2026-01-31T05:12:49.5162309Z 2026/01/31 05:12:49 [TRACE] Waiting 10s before next try
2026-01-31T05:12:59.8187903Z 2026/01/31 05:12:59 [TRACE] Waiting 1m0s before next try
2026-01-31T05:14:00.2233490Z 2026/01/31 05:14:00 [TRACE] Waiting 10s before next try
2026-01-31T05:14:10.4811900Z 2026/01/31 05:14:10 [TRACE] Waiting 1m0s before next try
2026-01-31T05:15:10.9570029Z 2026/01/31 05:15:10 [TRACE] Waiting 10s before next try
2026-01-31T05:15:21.2143932Z 2026/01/31 05:15:21 [TRACE] Waiting 1m0s before next try
2026-01-31T05:16:21.6415041Z 2026/01/31 05:16:21 [TRACE] Waiting 10s before next try
2026-01-31T05:16:31.8931637Z 2026/01/31 05:16:31 [TRACE] Waiting 1m0s before next try
2026-01-31T05:17:32.3032715Z 2026/01/31 05:17:32 [TRACE] Waiting 10s before next try
2026-01-31T05:17:42.5856728Z 2026/01/31 05:17:42 [TRACE] Waiting 1m0s before next try
2026-01-31T05:18:43.0072896Z 2026/01/31 05:18:43 [TRACE] Waiting 10s before next try
2026-01-31T05:18:53.2560052Z 2026/01/31 05:18:53 [TRACE] Waiting 1m0s before next try
2026-01-31T05:19:53.6753942Z 2026/01/31 05:19:53 [TRACE] Waiting 10s before next try
2026-01-31T05:20:03.9384776Z 2026/01/31 05:20:03 [TRACE] Waiting 1m0s before next try
2026-01-31T05:21:04.3488941Z 2026/01/31 05:21:04 [TRACE] Waiting 10s before next try
2026-01-31T05:21:14.6055402Z 2026/01/31 05:21:14 [TRACE] Waiting 1m0s before next try
2026-01-31T05:22:15.0754047Z 2026/01/31 05:22:15 [TRACE] Waiting 10s before next try
2026-01-31T05:22:25.3414752Z 2026/01/31 05:22:25 [TRACE] Waiting 1m0s before next try
2026-01-31T05:23:25.7564026Z 2026/01/31 05:23:25 [TRACE] Waiting 10s before next try
2026-01-31T05:23:36.0117680Z 2026/01/31 05:23:36 [TRACE] Waiting 1m0s before next try
2026-01-31T05:24:36.5003894Z 2026/01/31 05:24:36 [TRACE] Waiting 10s before next try
2026-01-31T05:24:46.7791597Z 2026/01/31 05:24:46 [TRACE] Waiting 1m0s before next try
2026-01-31T05:25:47.1673376Z 2026/01/31 05:25:47 [TRACE] Waiting 10s before next try
2026-01-31T05:25:57.4183366Z 2026/01/31 05:25:57 [TRACE] Waiting 1m0s before next try
2026-01-31T05:26:57.8538269Z 2026/01/31 05:26:57 [TRACE] Waiting 10s before next try
2026-01-31T05:27:08.1199954Z 2026/01/31 05:27:08 [TRACE] Waiting 1m0s before next try
2026-01-31T05:28:08.5715969Z 2026/01/31 05:28:08 [TRACE] Waiting 10s before next try
2026-01-31T05:28:18.8562143Z 2026/01/31 05:28:18 [TRACE] Waiting 1m0s before next try
2026-01-31T05:29:19.2911806Z 2026/01/31 05:29:19 [TRACE] Waiting 10s before next try
2026-01-31T05:29:29.5776680Z 2026/01/31 05:29:29 [TRACE] Waiting 1m0s before next try
2026-01-31T05:30:29.9885227Z 2026/01/31 05:30:29 [TRACE] Waiting 10s before next try
2026-01-31T05:30:40.2534758Z 2026/01/31 05:30:40 [TRACE] Waiting 1m0s before next try
2026-01-31T05:31:40.6973461Z 2026/01/31 05:31:40 [TRACE] Waiting 10s before next try
2026-01-31T05:31:50.9733150Z 2026/01/31 05:31:50 [TRACE] Waiting 1m0s before next try
2026-01-31T05:32:51.3739400Z 2026/01/31 05:32:51 [TRACE] Waiting 10s before next try
2026-01-31T05:33:01.6288869Z 2026/01/31 05:33:01 [TRACE] Waiting 1m0s before next try
2026-01-31T05:34:02.0712803Z 2026/01/31 05:34:02 [TRACE] Waiting 10s before next try
2026-01-31T05:34:12.3212169Z 2026/01/31 05:34:12 [TRACE] Waiting 1m0s before next try
2026-01-31T05:35:08.7366367Z panic: test timed out after 5h0m0s
2026-01-31T05:35:08.7367014Z 	running tests:
2026-01-31T05:35:08.7366367Z panic: test timed out after 5h0m0s
2026-01-31T05:35:08.7367014Z 	running tests:
2026-01-31T05:35:08.7367719Z 		TestAccSearchIndex_updatedToEmptySynonyms (27m32s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:39:22+00:00
```
2026-02-03T00:39:22.2665387Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2026-02-03T00:39:22.2666001Z     resource_search_index_test.go:124: Creating execution cluster: test-acc-tf-c-7291173514717855424
2026-02-03T00:39:22.7689658Z     resource_search_index_test.go:124: 
2026-02-03T00:39:22.7691739Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:39:22.7694614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:39:22.7697680Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:124
2026-02-03T00:39:22.7698987Z         	Error:      	Received unexpected error:
2026-02-03T00:39:22.7702125Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:22.7703758Z         	Test:       	TestAccSearchIndex_updatedToEmptySynonyms
2026-02-03T00:39:22.7706457Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7291173514717855424, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dcdd2/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:22.7708374Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (0.50s)
```

- 2026-02-04 PASS 10 seconds
- 2026-02-05 PASS 9 seconds
- 2026-02-06 PASS 11 seconds
- 2026-02-07 PASS 9 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 10 seconds
- 2026-02-10 PASS 10 seconds
- 2026-02-11 PASS 9 seconds
- 2026-02-12 PASS 9 seconds
- 2026-02-13 PASS 11 seconds
- 2026-02-14 PASS 10 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 10 seconds
- 2026-02-17 PASS 10 seconds
- 2026-02-18 PASS 9 seconds
- 2026-02-19 PASS 9 seconds
- 2026-02-20 PASS 9 seconds
- 2026-02-21 PASS 9 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 10 seconds
- 2026-02-24

### Error 2026-02-24T00:50:17+00:00
```
2026-02-24T00:50:17.1602169Z === RUN   TestAccSearchIndex_updatedToEmptySynonyms
2026-02-24T01:03:37.6619299Z === CONT  TestAccSearchIndex_updatedToEmptySynonyms
2026-02-24T01:03:41.1849159Z === NAME  TestAccSearchIndex_updatedToEmptySynonyms
2026-02-24T01:03:41.1849974Z     resource_search_index_test.go:127: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:03:41.1850651Z         
2026-02-24T01:03:41.1853014Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf29e8dfec41eaa845d3d/clusters/test-acc-tf-c-3544188480149776093/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-02-24T01:03:41.1854429Z         
2026-02-24T01:03:41.1854749Z           with mongodbatlas_search_index.test,
2026-02-24T01:03:41.1855402Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-02-24T01:03:41.1856006Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-02-24T01:03:41.1856315Z         
2026-02-24T01:03:41.2331872Z --- FAIL: TestAccSearchIndex_updatedToEmptySynonyms (3.58s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 9 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 9 seconds
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
- 2026-02-15 PASS 11 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 9 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 11 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
