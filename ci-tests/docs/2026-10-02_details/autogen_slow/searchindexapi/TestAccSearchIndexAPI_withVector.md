# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withVector Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 17) SKIP(x 11) FAIL(x 9)
Success rate: 65.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-02 04:59](#error-2026-09-02t0459000000) |  | dev | timeout | 10804.07s
[2026-09-03 10:02](#error-2026-09-03t1002470000) |  | dev | timeout | 10805.06s
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s
[2026-09-15 05:43](#error-2026-09-15t0543500000) |  | dev | timeout | 10803.06s
[2026-09-18 05:16](#error-2026-09-18t0516190000) |  | dev | timeout | 10803.04s
[2026-09-19 01:30](#error-2026-09-19t0130400000) |  | dev | timeout | 0.00s
[2026-09-21 05:48](#error-2026-09-21t0548450000) |  | dev | timeout | 10803.09s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02

### Error 2026-09-02T04:59:00+00:00
```
2026-09-02T04:59:00.1912445Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-02T04:59:00.1919339Z === CONT  TestAccSearchIndexAPI_withVector
2026-09-02T04:59:00.2054640Z === NAME  TestAccSearchIndexAPI_withVector
2026-09-02T04:59:00.2055428Z     resource_test.go:144: Step 1/1 error: Error running apply: exit status 1
2026-09-02T04:59:00.2056254Z         
2026-09-02T04:59:00.2056853Z         Error: Error waiting for changes in Create
2026-09-02T04:59:00.2057201Z         
2026-09-02T04:59:00.2057569Z           with mongodbatlas_search_index_api.test,
2026-09-02T04:59:00.2058298Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-02T04:59:00.2059002Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-02T04:59:00.2059364Z         
2026-09-02T04:59:00.2059683Z         group_id="6a97712e7f32ed5349f9c310",
2026-09-02T04:59:00.2060146Z         cluster_name="test-acc-tf-c-3797371471604204812",
2026-09-02T04:59:00.2061070Z         index_id="6a97767379ec95325857a125": timeout while waiting for state to
2026-09-02T04:59:00.2061723Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-02T04:59:00.2062398Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-02T04:59:00.2063113Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-02T04:59:00.2063630Z --- FAIL: TestAccSearchIndexAPI_withVector (10804.69s)
```

- 2026-09-03
  - PASS an hour
  - FAIL 3 hours

### Error 2026-09-03T10:02:47+00:00
```
2026-09-03T10:02:47.0689808Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-03T10:02:47.0693828Z === CONT  TestAccSearchIndexAPI_withVector
2026-09-03T10:02:47.0797488Z === NAME  TestAccSearchIndexAPI_withVector
2026-09-03T10:02:47.0798058Z     resource_test.go:144: Step 1/1 error: Error running apply: exit status 1
2026-09-03T10:02:47.0798518Z         
2026-09-03T10:02:47.0798907Z         Error: Error waiting for changes in Create
2026-09-03T10:02:47.0799486Z         
2026-09-03T10:02:47.0799878Z           with mongodbatlas_search_index_api.test,
2026-09-03T10:02:47.0800826Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-03T10:02:47.0801535Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-03T10:02:47.0801916Z         
2026-09-03T10:02:47.0802263Z         group_id="6a99146d72d7295ca98dbca0",
2026-09-03T10:02:47.0802746Z         cluster_name="test-acc-tf-c-571919649677458254",
2026-09-03T10:02:47.0803367Z         index_id="6a99189a72d7295ca9908e52": timeout while waiting for state to
2026-09-03T10:02:47.0804029Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-03T10:02:47.0804726Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-03T10:02:47.0805462Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-03T10:02:47.0807308Z   diagnostic_detail=
2026-09-03T10:02:47.0811332Z    diagnostic_severity=ERROR diagnostic_summary="Error waiting for changes in Create" tf_proto_version=6.11 tf_req_id=d7c68c14-d7b2-358a-d55f-2aba05a783af tf_rpc=ApplyResourceChange
2026-09-03T10:02:47.0820923Z    test_working_directory=/tmp/plugintest2225126806 test_step_number=1
2026-09-03T10:02:47.0829926Z --- FAIL: TestAccSearchIndexAPI_withVector (10805.63s)
```

- 2026-09-04 PASS 5 minutes
- 2026-09-05 PASS an hour
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 18 minutes
  - PASS 46 minutes
- 2026-09-08 PASS 28 minutes
- 2026-09-09 PASS 11 minutes
- 2026-09-10

### Error 2026-09-10T01:33:06+00:00
```
2026-09-10T01:33:06.1307792Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-10T01:33:06.1308360Z     resource_test.go:141: 
2026-09-10T01:33:06.1309363Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T01:33:06.1311367Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-09-10T01:33:06.1312198Z         	Error:      	Received unexpected error:
2026-09-10T01:33:06.1313463Z         	            	sample dataset load 6aa201365b8d9510e89370dd failed for cluster 6aa1fcb04ab31ba34525537f:test-acc-tf-c-1596466085034706675
2026-09-10T01:33:06.1314217Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-09-10T01:33:06.1314609Z --- FAIL: TestAccSearchIndexAPI_withVector (0.00s)
```

- 2026-09-11
  - FAIL unknown

### Error 2026-09-11T03:01:53+00:00
```
2026-09-11T03:01:53.1631848Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-11T03:01:53.1632247Z     resource_test.go:141: 
2026-09-11T03:01:53.1633016Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T03:01:53.1634535Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-09-11T03:01:53.1635173Z         	Error:      	Received unexpected error:
2026-09-11T03:01:53.1635986Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-11T03:01:53.1636648Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-09-11T03:01:53.1636965Z --- FAIL: TestAccSearchIndexAPI_withVector (0.00s)
```

  - FAIL unknown

### Error 2026-09-11T07:31:03+00:00
```
2026-09-11T07:31:03.2003976Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-11T07:31:03.2004639Z     resource_test.go:141: 
2026-09-11T07:31:03.2006229Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:31:03.2009150Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-09-11T07:31:03.2010508Z         	Error:      	Received unexpected error:
2026-09-11T07:31:03.2012356Z         	            	sample dataset load 6aa3a5fff7fcc4bbebf76935 failed for cluster 6aa3a28df7fcc4bbebf53df1:test-acc-tf-c-1260780199030207545
2026-09-11T07:31:03.2013547Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-09-11T07:31:03.2014251Z --- FAIL: TestAccSearchIndexAPI_withVector (0.00s)
```

- 2026-09-12 PASS 16 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 2 hours
- 2026-09-15

### Error 2026-09-15T05:43:50+00:00
```
2026-09-15T05:43:50.3091603Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-15T05:43:50.3095725Z === CONT  TestAccSearchIndexAPI_withVector
2026-09-15T05:43:50.3163030Z === NAME  TestAccSearchIndexAPI_withVector
2026-09-15T05:43:50.3163779Z     resource_test.go:144: Step 1/1 error: Error running apply: exit status 1
2026-09-15T05:43:50.3164219Z         
2026-09-15T05:43:50.3164578Z         Error: Error waiting for changes in Create
2026-09-15T05:43:50.3164914Z         
2026-09-15T05:43:50.3165280Z           with mongodbatlas_search_index_api.test,
2026-09-15T05:43:50.3166017Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-15T05:43:50.3166718Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-15T05:43:50.3167087Z         
2026-09-15T05:43:50.3167413Z         group_id="6aa894c6f45e19b0d3dcab24",
2026-09-15T05:43:50.3167892Z         cluster_name="test-acc-tf-c-6477351237734953754",
2026-09-15T05:43:50.3168529Z         index_id="6aa898f3f45e19b0d3e0ed56": timeout while waiting for state to
2026-09-15T05:43:50.3169194Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-15T05:43:50.3169883Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-15T05:43:50.3170622Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-15T05:43:50.3171751Z --- FAIL: TestAccSearchIndexAPI_withVector (10803.57s)
```

- 2026-09-16 PASS 43 minutes
- 2026-09-17 PASS 4 minutes
- 2026-09-18

### Error 2026-09-18T05:16:19+00:00
```
2026-09-18T05:16:19.5407877Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-18T05:16:19.5411173Z === CONT  TestAccSearchIndexAPI_withVector
2026-09-18T05:16:19.5447426Z === NAME  TestAccSearchIndexAPI_withVector
2026-09-18T05:16:19.5447920Z     resource_test.go:144: Step 1/1 error: Error running apply: exit status 1
2026-09-18T05:16:19.5448270Z         
2026-09-18T05:16:19.5448581Z         Error: Error waiting for changes in Create
2026-09-18T05:16:19.5448863Z         
2026-09-18T05:16:19.5449190Z           with mongodbatlas_search_index_api.test,
2026-09-18T05:16:19.5449926Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-18T05:16:19.5450523Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-18T05:16:19.5450832Z         
2026-09-18T05:16:19.5451121Z         group_id="6aac88de1bd5f998a1452f76",
2026-09-18T05:16:19.5451522Z         cluster_name="test-acc-tf-c-3593569086852570367",
2026-09-18T05:16:19.5452039Z         index_id="6aac8efdacef019a417be1fe": timeout while waiting for state to
2026-09-18T05:16:19.5452582Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-18T05:16:19.5453165Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-18T05:16:19.5455107Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-18T05:16:19.5455534Z --- FAIL: TestAccSearchIndexAPI_withVector (10803.39s)
```

- 2026-09-19

### Error 2026-09-19T01:30:40+00:00
```
2026-09-19T01:30:40.9210369Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-19T01:30:40.9210661Z     resource_test.go:141: 
2026-09-19T01:30:40.9211402Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-19T01:30:40.9212874Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-09-19T01:30:40.9213504Z         	Error:      	Received unexpected error:
2026-09-19T01:30:40.9214480Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-19T01:30:40.9214987Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-09-19T01:30:40.9215294Z --- FAIL: TestAccSearchIndexAPI_withVector (0.00s)
```

- 2026-09-20: MISSING
- 2026-09-21

### Error 2026-09-21T05:48:45+00:00
```
2026-09-21T05:48:45.1964871Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-21T05:48:45.1970924Z === CONT  TestAccSearchIndexAPI_withVector
2026-09-21T05:48:45.2140568Z === NAME  TestAccSearchIndexAPI_withVector
2026-09-21T05:48:45.2141718Z     resource_test.go:144: Step 1/1 error: Error running apply: exit status 1
2026-09-21T05:48:45.2142659Z         
2026-09-21T05:48:45.2143278Z         Error: Error waiting for changes in Create
2026-09-21T05:48:45.2143864Z         
2026-09-21T05:48:45.2144513Z           with mongodbatlas_search_index_api.test,
2026-09-21T05:48:45.2145767Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-09-21T05:48:45.2146844Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-09-21T05:48:45.2147407Z         
2026-09-21T05:48:45.2147954Z         group_id="6ab07eed79951ab0058245fb",
2026-09-21T05:48:45.2148759Z         cluster_name="test-acc-tf-c-6050672708674164813",
2026-09-21T05:48:45.2149833Z         index_id="6ab082d350f317768c30e8c3": timeout while waiting for state to
2026-09-21T05:48:45.2150937Z         become 'READY, STEADY' (last state: 'PENDING', timeout: 3h0m0s)
2026-09-21T05:48:45.2152116Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-09-21T05:48:45.2153638Z         transient error, wait before retrying to allow resource deletion to finish
2026-09-21T05:48:45.2154506Z --- FAIL: TestAccSearchIndexAPI_withVector (10803.88s)
```

- 2026-09-22
  - PASS 21 minutes
  - PASS an hour
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
- 2026-09-06 PASS 38 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 36 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS a minute
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 47 minutes
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
