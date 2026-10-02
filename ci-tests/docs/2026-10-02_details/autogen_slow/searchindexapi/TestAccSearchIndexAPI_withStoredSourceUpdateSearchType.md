# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceUpdateSearchType Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, FAIL(x 14) PASS(x 12) SKIP(x 11)
Success rate: 46.15%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 10804.01s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 10803.06s
[2026-09-07 05:48](#error-2026-09-07t0548170000) |  | dev | timeout | 10803.05s
[2026-09-07 17:14](#error-2026-09-07t1714300000) |  | dev | timeout | 10803.08s
[2026-09-08 05:00](#error-2026-09-08t0500430000) |  | dev | timeout | 10803.01s
[2026-09-09 04:45](#error-2026-09-09t0445050000) |  | dev | timeout | 10803.07s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s
[2026-09-15 05:43](#error-2026-09-15t0543500000) |  | dev | timeout | 10803.06s
[2026-09-16 05:43](#error-2026-09-16t0543440000) |  | dev | timeout | 10804.00s
[2026-09-19 01:30](#error-2026-09-19t0130400000) |  | dev | timeout | 0.00s
[2026-09-21 05:48](#error-2026-09-21t0548450000) |  | dev | timeout | 10803.01s
[2026-09-22 12:46](#error-2026-09-22t1246470000) |  | dev | timeout | 10805.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1916870Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-02T04:59:00.1923270Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-02T04:59:00.2031191Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-02T04:59:00.2031822Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-02T04:59:00.2032256Z         
2026-09-02T04:59:00.2032617Z         Error: Error waiting for changes in Create
2026-09-02T04:59:00.2032949Z         
2026-09-02T04:59:00.2033309Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.2034062Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.2034741Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.2035100Z         
2026-09-02T04:59:00.2035416Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.2035873Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.2036472Z         index_id="6a97767379ec95325857a124": timeout while waiting for state to
2026-09-02T04:59:00.2037118Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-02T04:59:00.2037794Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-02T04:59:00.2038523Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-02T04:59:00.2039239Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10804.06s)
```

- 2026-09-03
  - PASS 47 minutes
  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0692477Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-03T10:02:47.0695408Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-03T10:02:47.0723225Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-03T10:02:47.0724332Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-03T10:02:47.0724808Z         
2026-09-03T10:02:47.0725197Z         Error: Error waiting for changes in Create
2026-09-03T10:02:47.0725567Z         
2026-09-03T10:02:47.0725960Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0726726Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0727443Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0727823Z         
2026-09-03T10:02:47.0728164Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0728661Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0729550Z         index_id="6a99189a8f4e31db6818c1f8": timeout while waiting for state to
2026-09-03T10:02:47.0730233Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0731360Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T10:02:47.0732133Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T10:02:47.0732744Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10803.55s)
```

- 2026-09-04 PASS 32 minutes
- 2026-09-05 PASS an hour
- 2026-09-06: MISSING
- 2026-09-07
  - FAIL 3 hours

### Error 2026-09-07T05:48:17+00:00
```
2026-09-07T05:48:17.9812717Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-07T05:48:17.9817238Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-07T05:48:17.9839253Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-07T05:48:17.9840154Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-07T05:48:17.9840703Z         
2026-09-07T05:48:17.9841075Z         Error: Error waiting for changes in Create
2026-09-07T05:48:17.9841423Z         
2026-09-07T05:48:17.9841795Z           with mongodbatlas_search_index_api.test,
2026-09-07T05:48:17.9842525Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-07T05:48:17.9843204Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-07T05:48:17.9843564Z         
2026-09-07T05:48:17.9843886Z         group_id="6a9e09d2ce994148d59e6659",
2026-09-07T05:48:17.9844350Z         cluster_name="test-acc-tf-c-1313053707861581472",
2026-09-07T05:48:17.9844960Z         index_id="6a9e0e9ace994148d5a17758": timeout while waiting for state to
2026-09-07T05:48:17.9845744Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-07T05:48:17.9846430Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-07T05:48:17.9847152Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-07T05:48:17.9848726Z   diagnostic_detail=
2026-09-07T05:48:17.9852948Z    diagnostic_severity=ERROR diagnostic_summary="Error waiting for changes in Create" tf_req_id=66ef9a2c-3e40-1586-625a-ff02007502e3 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.11
2026-09-07T05:48:17.9861754Z    test_name=TestAccSearchIndexAPI_withStoredSourceInclude test_terraform_path=/home/runner/work/_temp/e52e6031-cba3-4dee-ab8a-ffaca8d2f0b8/terraform test_working_directory=/tmp/plugintest1707819163 test_step_number=1
2026-09-07T05:48:17.9871398Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10803.52s)
```

  - FAIL 3 hours

### Error 2026-09-07T17:14:30+00:00
```
2026-09-07T17:14:30.4731362Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-07T17:14:30.4736491Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-07T17:14:30.4859261Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-07T17:14:30.4860399Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-07T17:14:30.4861161Z         
2026-09-07T17:14:30.4861819Z         Error: Error waiting for changes in Create
2026-09-07T17:14:30.4862411Z         
2026-09-07T17:14:30.4863444Z           with mongodbatlas_search_index_api.test,
2026-09-07T17:14:30.4864399Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-07T17:14:30.4865253Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-07T17:14:30.4865708Z         
2026-09-07T17:14:30.4866110Z         group_id="6a9eaaa643d6e4ba6d1eae49",
2026-09-07T17:14:30.4866685Z         cluster_name="test-acc-tf-c-536976955874991021",
2026-09-07T17:14:30.4867446Z         index_id="6a9eafa6ff4aa12cb9ba0f82": timeout while waiting for state to
2026-09-07T17:14:30.4868258Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-07T17:14:30.4869095Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-07T17:14:30.4869987Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-07T17:14:30.4870717Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10803.78s)
```

- 2026-09-08

### Error 2026-09-08T05:00:43+00:00
```
2026-09-08T05:00:43.6867442Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-08T05:00:43.6875576Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-08T05:00:43.6899185Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-08T05:00:43.6900498Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-08T05:00:43.6900984Z         
2026-09-08T05:00:43.6901349Z         Error: Error waiting for changes in Create
2026-09-08T05:00:43.6901686Z         
2026-09-08T05:00:43.6902053Z           with mongodbatlas_search_index_api.test,
2026-09-08T05:00:43.6902786Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-08T05:00:43.6903458Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-08T05:00:43.6903812Z         
2026-09-08T05:00:43.6904127Z         group_id="6a9f5a9228da0e5fc08e7890",
2026-09-08T05:00:43.6904602Z         cluster_name="test-acc-tf-c-4534713065942648190",
2026-09-08T05:00:43.6905207Z         index_id="6a9f5f9228da0e5fc0901b62": timeout while waiting for state to
2026-09-08T05:00:43.6905844Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-08T05:00:43.6906511Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-08T05:00:43.6907679Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-08T05:00:43.6916668Z   
2026-09-08T05:00:43.6925168Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10803.08s)
```

- 2026-09-09

### Error 2026-09-09T04:45:05+00:00
```
2026-09-09T04:45:05.5398501Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-09T04:45:05.5402752Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-09T04:45:05.5477266Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-09T04:45:05.5478360Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-09T04:45:05.5479077Z         
2026-09-09T04:45:05.5479902Z         Error: Error waiting for changes in Create
2026-09-09T04:45:05.5480606Z         
2026-09-09T04:45:05.5481258Z           with mongodbatlas_search_index_api.test,
2026-09-09T04:45:05.5482558Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-09T04:45:05.5483767Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-09T04:45:05.5484405Z         
2026-09-09T04:45:05.5484973Z         group_id="6aa0abadf33137a6ca4829f0",
2026-09-09T04:45:05.5485978Z         cluster_name="test-acc-tf-c-1622242972829995596",
2026-09-09T04:45:05.5487077Z         index_id="6aa0b0f554e3320f685c1383": timeout while waiting for state to
2026-09-09T04:45:05.5488193Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-09T04:45:05.5489374Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-09T04:45:05.5490859Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-09T04:45:05.5491855Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10803.67s)
```

- 2026-09-10

### Error 2026-09-10T01:33:06+00:00
```
2026-09-10T01:33:06.1337401Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-10T01:33:06.1338063Z     resource_test.go:199: 
2026-09-10T01:33:06.1339142Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T01:33:06.1341170Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:199
2026-09-10T01:33:06.1342020Z         	Error:      	Received unexpected error:
2026-09-10T01:33:06.1343296Z         	            	sample dataset load 6aa201365b8d9510e89370dd failed for cluster 6aa1fcb04ab31ba34525537f:test-acc-tf-c-1596466085034706675
2026-09-10T01:33:06.1344160Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-10T01:33:06.1344714Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (0.00s)
```

- 2026-09-11
  - FAIL unknown

### Error 2026-09-11T03:01:53+00:00
```
2026-09-11T03:01:53.1648184Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-11T03:01:53.1648536Z     resource_test.go:199: 
2026-09-11T03:01:53.1649306Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T03:01:53.1650822Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:199
2026-09-11T03:01:53.1651468Z         	Error:      	Received unexpected error:
2026-09-11T03:01:53.1652269Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-11T03:01:53.1652851Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-11T03:01:53.1653272Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (0.00s)
```

  - FAIL unknown

### Error 2026-09-11T07:31:03+00:00
```
2026-09-11T07:31:03.2037261Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-11T07:31:03.2038074Z     resource_test.go:199: 
2026-09-11T07:31:03.2039606Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:31:03.2042393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:199
2026-09-11T07:31:03.2043775Z         	Error:      	Received unexpected error:
2026-09-11T07:31:03.2045404Z         	            	sample dataset load 6aa3a5fff7fcc4bbebf76935 failed for cluster 6aa3a28df7fcc4bbebf53df1:test-acc-tf-c-1260780199030207545
2026-09-11T07:31:03.2046792Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-11T07:31:03.2047605Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (0.00s)
```

- 2026-09-12 PASS 42 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS an hour
- 2026-09-15

### Error 2026-09-15T05:43:50+00:00
```
2026-09-15T05:43:50.3094345Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-15T05:43:50.3096570Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-15T05:43:50.3139553Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-15T05:43:50.3140208Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-15T05:43:50.3140631Z         
2026-09-15T05:43:50.3140993Z         Error: Error waiting for changes in Create
2026-09-15T05:43:50.3141332Z         
2026-09-15T05:43:50.3141705Z           with mongodbatlas_search_index_api.test,
2026-09-15T05:43:50.3142449Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-15T05:43:50.3143157Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-15T05:43:50.3143749Z         
2026-09-15T05:43:50.3144085Z         group_id="6aa894c6f45e19b0d3dcab24",
2026-09-15T05:43:50.3144564Z         cluster_name="test-acc-tf-c-6477351237734953754",
2026-09-15T05:43:50.3145200Z         index_id="6aa898f35fcf07afdd9eadfa": timeout while waiting for state to
2026-09-15T05:43:50.3145861Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-15T05:43:50.3146549Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-15T05:43:50.3147283Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-15T05:43:50.3150271Z   diagnostic_detail=
2026-09-15T05:43:50.3153802Z    diagnostic_severity=ERROR
2026-09-15T05:43:50.3162767Z   
2026-09-15T05:43:50.3171222Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10803.55s)
```

- 2026-09-16

### Error 2026-09-16T05:43:44+00:00
```
2026-09-16T05:43:44.8873543Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-16T05:43:44.8875140Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-16T05:43:44.8917312Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-16T05:43:44.8920023Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-16T05:43:44.8920647Z         
2026-09-16T05:43:44.8921178Z         Error: Error waiting for changes in Create
2026-09-16T05:43:44.8921667Z         
2026-09-16T05:43:44.8922214Z           with mongodbatlas_search_index_api.test,
2026-09-16T05:43:44.8923266Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-16T05:43:44.8924586Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-16T05:43:44.8925179Z         
2026-09-16T05:43:44.8925698Z         group_id="6aa9e5e4013d831ec44b342e",
2026-09-16T05:43:44.8926439Z         cluster_name="test-acc-tf-c-750170190363952492",
2026-09-16T05:43:44.8927468Z         index_id="6aa9ebbf013d831ec44fe7a4": timeout while waiting for state to
2026-09-16T05:43:44.8928269Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-16T05:43:44.8929237Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-16T05:43:44.8929955Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-16T05:43:44.8930542Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10804.04s)
```

- 2026-09-17 PASS 40 minutes
- 2026-09-18 PASS 44 minutes
- 2026-09-19

### Error 2026-09-19T01:30:40+00:00
```
2026-09-19T01:30:40.9226297Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-19T01:30:40.9226628Z     resource_test.go:199: 
2026-09-19T01:30:40.9227362Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:30:40.9228820Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:199
2026-09-19T01:30:40.9229442Z         	Error:      	Received unexpected error:
2026-09-19T01:30:40.9230218Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:30:40.9230786Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-19T01:30:40.9231205Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21

### Error 2026-09-21T05:48:45+00:00
```
2026-09-21T05:48:45.1968869Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-21T05:48:45.1974354Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-21T05:48:45.2005582Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-21T05:48:45.2006546Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-21T05:48:45.2007251Z         
2026-09-21T05:48:45.2007893Z         Error: Error waiting for changes in Create
2026-09-21T05:48:45.2008473Z         
2026-09-21T05:48:45.2009123Z           with mongodbatlas_search_index_api.test,
2026-09-21T05:48:45.2010473Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-21T05:48:45.2011688Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-21T05:48:45.2012312Z         
2026-09-21T05:48:45.2013098Z         group_id="6ab07eed79951ab0058245fb",
2026-09-21T05:48:45.2013934Z         cluster_name="test-acc-tf-c-6050672708674164813",
2026-09-21T05:48:45.2015009Z         index_id="6ab082d350f317768c30e8b4": timeout while waiting for state to
2026-09-21T05:48:45.2016154Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-21T05:48:45.2017321Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-21T05:48:45.2018586Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-21T05:48:45.2024166Z   diagnostic_detail=
2026-09-21T05:48:45.2029654Z    diagnostic_severity=ERROR
2026-09-21T05:48:45.2057026Z   
2026-09-21T05:48:45.2071780Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10803.13s)
```

- 2026-09-22
  - PASS 52 minutes
  - FAIL 3 hours

### Error 2026-09-22T12:46:47+00:00
```
2026-09-22T12:46:47.9753366Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-22T12:46:47.9757241Z === CONT  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-22T12:46:47.9873019Z === NAME  TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-09-22T12:46:47.9874196Z     resource_test.go:202: Step 1/1 error: Error running apply: exit status 1
2026-09-22T12:46:47.9874940Z         
2026-09-22T12:46:47.9875622Z         Error: Error waiting for changes in Create
2026-09-22T12:46:47.9876217Z         
2026-09-22T12:46:47.9876890Z           with mongodbatlas_search_index_api.test,
2026-09-22T12:46:47.9878183Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-22T12:46:47.9879441Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-22T12:46:47.9880097Z         
2026-09-22T12:46:47.9880705Z         group_id="6ab23b4fd135efc1a7edf95a",
2026-09-22T12:46:47.9881534Z         cluster_name="test-acc-tf-c-7202313398832200026",
2026-09-22T12:46:47.9882873Z         index_id="6ab241216d79e71061b41b1a": timeout while waiting for state to
2026-09-22T12:46:47.9884071Z         become 'READY, STEADY' (last state: 'BUILDING', timeout: 3h0m0s)
2026-09-22T12:46:47.9885470Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-22T12:46:47.9886793Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-22T12:46:47.9890457Z   diagnostic_detail=
2026-09-22T12:46:47.9897345Z    diagnostic_severity=ERROR diagnostic_summary="Error waiting for changes in Create" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-09-22T12:46:47.9923984Z    test_terraform_path=/home/runner/work/_temp/4eee0bea-124c-4326-a033-b65c87cd4a74/terraform test_working_directory=/tmp/plugintest2543785031
2026-09-22T12:46:48.0023614Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (10805.43s)
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
- 2026-09-06 PASS 40 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 34 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 36 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 28 minutes
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
