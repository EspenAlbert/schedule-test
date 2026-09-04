# search_index/searchindex/TestAccSearchIndex_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 01:46](#error-2026-08-27t0146500000) |  | dev | 1018.03s
[2026-08-28 03:22](#error-2026-08-28t0322580000) | ATLAS_SEARCH_COLLECTION_NOT_FOUND /api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes | dev | 3.03s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 15 minutes
- 2026-08-07 PASS 14 seconds
- 2026-08-08 PASS 15 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 14 seconds
- 2026-08-11 PASS 15 minutes
- 2026-08-12 PASS 12 seconds
- 2026-08-13 PASS 16 minutes
- 2026-08-14 PASS 12 seconds
- 2026-08-15 PASS 15 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 16 seconds
- 2026-08-18 PASS 16 minutes
- 2026-08-19 PASS 12 seconds
- 2026-08-20 PASS 15 minutes
- 2026-08-21 PASS 14 seconds
- 2026-08-22 PASS 15 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 12 seconds
- 2026-08-25 PASS 15 minutes
- 2026-08-26 PASS 13 seconds
- 2026-08-27

### Error 2026-08-27T01:46:50+00:00
```
2026-08-27T01:46:50.6648577Z === RUN   TestAccSearchIndex_basic
2026-08-27T01:46:50.6650245Z     resource_search_index_test.go:17: Creating execution project (1): test-acc-tf-p-8137707421418386857
2026-08-27T01:46:53.0340311Z     resource_search_index_test.go:17: Creating execution cluster: test-acc-tf-c-714542849431786712
2026-08-27T01:46:54.0932862Z 2026/08/27 01:46:54 [DEBUG] Waiting for state to become: [IDLE]
2026-08-27T01:49:54.4841178Z 2026/08/27 01:49:54 [TRACE] Waiting 1m0s before next try
2026-08-27T01:50:54.7802017Z 2026/08/27 01:50:54 [TRACE] Waiting 10s before next try
2026-08-27T01:51:04.9272454Z 2026/08/27 01:51:04 [TRACE] Waiting 1m0s before next try
2026-08-27T01:52:05.1201751Z 2026/08/27 01:52:05 [TRACE] Waiting 10s before next try
2026-08-27T01:52:15.2613859Z 2026/08/27 01:52:15 [TRACE] Waiting 1m0s before next try
2026-08-27T01:53:15.4875478Z 2026/08/27 01:53:15 [TRACE] Waiting 10s before next try
2026-08-27T01:53:25.6273990Z 2026/08/27 01:53:25 [TRACE] Waiting 1m0s before next try
2026-08-27T01:54:25.9200432Z 2026/08/27 01:54:25 [TRACE] Waiting 10s before next try
2026-08-27T01:54:36.0565928Z 2026/08/27 01:54:36 [TRACE] Waiting 1m0s before next try
2026-08-27T01:55:36.2618465Z 2026/08/27 01:55:36 [TRACE] Waiting 10s before next try
2026-08-27T01:55:46.3881257Z 2026/08/27 01:55:46 [TRACE] Waiting 1m0s before next try
2026-08-27T01:56:46.6354903Z 2026/08/27 01:56:46 [TRACE] Waiting 10s before next try
2026-08-27T01:56:56.8017841Z 2026/08/27 01:56:56 [TRACE] Waiting 1m0s before next try
2026-08-27T01:57:57.0604164Z 2026/08/27 01:57:57 [TRACE] Waiting 10s before next try
2026-08-27T01:58:07.2209048Z 2026/08/27 01:58:07 [TRACE] Waiting 1m0s before next try
2026-08-27T01:59:07.5225981Z 2026/08/27 01:59:07 [TRACE] Waiting 10s before next try
2026-08-27T01:59:17.6540885Z 2026/08/27 01:59:17 [TRACE] Waiting 1m0s before next try
2026-08-27T02:00:17.9699802Z 2026/08/27 02:00:17 [TRACE] Waiting 10s before next try
2026-08-27T02:00:28.1131279Z 2026/08/27 02:00:28 [TRACE] Waiting 1m0s before next try
2026-08-27T02:01:28.3293002Z 2026/08/27 02:01:28 [TRACE] Waiting 10s before next try
2026-08-27T02:01:38.4602794Z 2026/08/27 02:01:38 [TRACE] Waiting 1m0s before next try
2026-08-27T02:02:38.6083336Z 2026/08/27 02:02:38 [TRACE] Waiting 10s before next try
2026-08-27T02:02:48.8874926Z 2026/08/27 02:02:48 [DEBUG] Waiting for state to become: [COMPLETED]
2026-08-27T02:03:49.0042231Z     resource_search_index_test.go:17: 
2026-08-27T02:03:49.0043976Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-08-27T02:03:49.0049168Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:178
2026-08-27T02:03:49.0051654Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:275
2026-08-27T02:03:49.0055220Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:17
2026-08-27T02:03:49.0056552Z         	Error:      	Received unexpected error:
2026-08-27T02:03:49.0057864Z         	            	unexpected state 'FAILED', wanted target 'COMPLETED'. last error: %!s(<nil>)
2026-08-27T02:03:49.0058482Z         	Test:       	TestAccSearchIndex_basic
2026-08-27T02:03:49.0058841Z --- FAIL: TestAccSearchIndex_basic (1018.34s)
```

- 2026-08-28

### Error 2026-08-28T03:22:58+00:00
```
2026-08-28T03:22:58.3168665Z === RUN   TestAccSearchIndex_basic
2026-08-28T04:04:23.6158320Z === CONT  TestAccSearchIndex_basic
2026-08-28T04:04:26.5473021Z    test_working_directory=/tmp/plugintest1851924255 test_terraform_path=/home/runner/work/_temp/70f82674-c306-4281-b045-24c1673e4a2c/terraform test_name=TestAccSearchIndex_withVectorAutoEmbed test_step_number=1
2026-08-28T04:04:26.7929574Z === NAME  TestAccSearchIndex_basic
2026-08-28T04:04:26.7930125Z     resource_search_index_test.go:17: Step 1/2 error: Error running apply: exit status 1
2026-08-28T04:04:26.7930576Z         
2026-08-28T04:04:26.7932472Z         Error: error creating index: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fba963fde9550ed152ff/clusters/test-acc-tf-c-3901854463039680436/search/indexes POST: HTTP 400 Bad Request (Error code: "ATLAS_SEARCH_COLLECTION_NOT_FOUND") Detail: Collection listingsAndReviews was not found. Reason: Bad Request. Params: [listingsAndReviews], BadRequestDetail: 
2026-08-28T04:04:26.7933550Z         
2026-08-28T04:04:26.7933861Z           with mongodbatlas_search_index.test,
2026-08-28T04:04:26.7934403Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index" "test":
2026-08-28T04:04:26.7934985Z           12: 		resource "mongodbatlas_search_index" "test" {
2026-08-28T04:04:26.7935256Z         
2026-08-28T04:04:26.8298399Z    test_name=TestAccSearchIndex_withStoredSourceTrue test_terraform_path=/home/runner/work/_temp/70f82674-c306-4281-b045-24c1673e4a2c/terraform test_working_directory=/tmp/plugintest2232694947 test_step_number=1
2026-08-28T04:04:26.8362433Z --- FAIL: TestAccSearchIndex_basic (3.34s)
```

- 2026-08-29 PASS 18 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 16 seconds
- 2026-09-01 PASS 16 minutes
- 2026-09-02 PASS 16 seconds
- 2026-09-03 PASS 27 minutes
- 2026-09-04 PASS 15 seconds

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 12 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 13 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 12 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 13 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 31 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 18 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
