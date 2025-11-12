# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev |  | 563.09s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections | qa |  | 0.07s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections | dev | flaky_500 | 0.07s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 15 seconds
- 2025-10-05 PASS 18 seconds
- 2025-10-06 PASS 15 seconds
- 2025-10-07 PASS 11 seconds
- 2025-10-08 PASS 15 seconds
- 2025-10-09 PASS 11 seconds
- 2025-10-10 PASS 16 seconds
- 2025-10-11 PASS 12 seconds
- 2025-10-12 PASS 15 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.3206058Z === RUN   TestAccStreamProcessor_clusterType
2025-10-13T01:24:12.3209990Z === CONT  TestAccStreamProcessor_clusterType
2025-10-13T01:24:12.3339207Z === NAME  TestAccStreamProcessor_clusterType
2025-10-13T01:24:12.3339771Z     resource_test.go:273: Step 1/1 error: Error running apply: exit status 1
2025-10-13T01:24:12.3340180Z         
2025-10-13T01:24:12.3340525Z         Error: error creating resource
2025-10-13T01:24:12.3340828Z         
2025-10-13T01:24:12.3341278Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3342240Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3342996Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3343372Z         
2025-10-13T01:24:12.3343941Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3358667Z   
2025-10-13T01:24:12.3359215Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-13T01:24:12.3359686Z         
2025-10-13T01:24:12.3360026Z         Error: error deleting resource
2025-10-13T01:24:12.3360332Z         
2025-10-13T01:24:12.3361430Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ec47f2b8d3122c296501b7/streams/test-acc-tf-s-6101778557580258383/connections/ClusterConnectionSrceygww
2025-10-13T01:24:12.3362320Z         DELETE: HTTP 403 Forbidden (Error code:
2025-10-13T01:24:12.3362987Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-10-13T01:24:12.3363614Z         name ClusterConnectionSrceygww in stream instance
2025-10-13T01:24:12.3364287Z         test-acc-tf-s-6101778557580258383 has active processors, and cannot be
2025-10-13T01:24:12.3365104Z         changed. Reason: Forbidden. Params: [ClusterConnectionSrceygww
2025-10-13T01:24:12.3365725Z         test-acc-tf-s-6101778557580258383], BadRequestDetail: 
2025-10-13T01:24:12.3366150Z --- FAIL: TestAccStreamProcessor_clusterType (563.87s)
```

- 2025-10-14 PASS 12 seconds
- 2025-10-15 PASS 10 seconds
- 2025-10-16 PASS 9 seconds
- 2025-10-17 PASS 8 seconds
- 2025-10-18 PASS 9 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.2125726Z === RUN   TestAccStreamProcessor_clusterType
2025-10-19T00:50:12.2127324Z === CONT  TestAccStreamProcessor_clusterType
2025-10-19T00:50:12.2177677Z === NAME  TestAccStreamProcessor_clusterType
2025-10-19T00:50:12.2177956Z     resource_test.go:273: Step 1/1 error: Error running apply: exit status 1
2025-10-19T00:50:12.2178050Z         
2025-10-19T00:50:12.2178220Z         Error: error creating resource
2025-10-19T00:50:12.2178308Z         
2025-10-19T00:50:12.2178573Z           with mongodbatlas_stream_connection.cluster_src,
2025-10-19T00:50:12.2179059Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-10-19T00:50:12.2179414Z           25:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-10-19T00:50:12.2179505Z         
2025-10-19T00:50:12.2180159Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections
2025-10-19T00:50:12.2180495Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2180813Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2181151Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2181434Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2181572Z         BadRequestDetail: 
2025-10-19T00:50:12.2193624Z    test_name=TestAccStreamProcessor_withOptions test_working_directory=/tmp/plugintest31543606
2025-10-19T00:50:12.2201995Z --- FAIL: TestAccStreamProcessor_clusterType (0.70s)
```

- 2025-10-20
  - PASS 10 seconds
  - PASS 7 seconds
- 2025-10-21 PASS 11 seconds
- 2025-10-22
  - PASS 9 seconds
  - PASS 12 seconds
- 2025-10-23 PASS 11 seconds
- 2025-10-24 PASS 13 seconds
- 2025-10-25 PASS 13 seconds
- 2025-10-26 PASS 9 seconds
- 2025-10-27 PASS 9 seconds
- 2025-10-28 PASS 9 seconds
- 2025-10-29 PASS 9 seconds
- 2025-10-30 PASS 21 seconds
- 2025-10-31 PASS 12 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 9 seconds
- 2025-11-03 PASS 9 seconds
- 2025-11-04 PASS 9 seconds
- 2025-11-05
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1554265Z === RUN   TestAccStreamProcessor_clusterType
2025-11-06T00:51:58.1557404Z === CONT  TestAccStreamProcessor_clusterType
2025-11-06T00:51:58.1640410Z === NAME  TestAccStreamProcessor_clusterType
2025-11-06T00:51:58.1640961Z     resource_test.go:290: Step 1/1 error: Error running apply: exit status 1
2025-11-06T00:51:58.1641057Z         
2025-11-06T00:51:58.1641237Z         Error: error creating resource
2025-11-06T00:51:58.1641332Z         
2025-11-06T00:51:58.1641602Z           with mongodbatlas_stream_connection.cluster_src,
2025-11-06T00:51:58.1642106Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-11-06T00:51:58.1642461Z           25:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-11-06T00:51:58.1642555Z         
2025-11-06T00:51:58.1643234Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections
2025-11-06T00:51:58.1643597Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-11-06T00:51:58.1643898Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-11-06T00:51:58.1644047Z         BadRequestDetail: 
2025-11-06T00:51:58.1649944Z    test_terraform_path=/home/runner/work/_temp/c67eacf2-2435-42b6-ba18-88c701e78006/terraform test_step_number=1 test_working_directory=/tmp/plugintest1149091322
2025-11-06T00:51:58.1656834Z --- FAIL: TestAccStreamProcessor_clusterType (0.73s)
```

- 2025-11-07 PASS 9 seconds
- 2025-11-08 PASS 10 seconds
- 2025-11-09 PASS 13 seconds
- 2025-11-10 PASS 10 seconds
- 2025-11-11 PASS 11 seconds
- 2025-11-12 PASS 11 seconds