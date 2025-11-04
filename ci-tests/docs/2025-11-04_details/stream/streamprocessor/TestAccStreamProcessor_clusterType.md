# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 563.09s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections | qa | 0.07s

## Timeline
- 2025-10-05: MISSING
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