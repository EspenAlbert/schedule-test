# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 3)
Success rate: 92.50%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-01 12:09](#error-2025-10-01t1209040000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68dd150e503d494afa81e680/streams/test-acc-tf-s-4389468527908497798/processor | dev | 1.07s
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 563.09s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections | qa | 0.07s

## Timeline
- 2025-09-30 PASS 15 seconds
- 2025-10-01
  - PASS 14 seconds
  - PASS 17 seconds
  - PASS 16 seconds
  - PASS 14 seconds
  - PASS 15 seconds
  - PASS 18 seconds
  - FAIL a second

### Error 2025-10-01T12:09:04+00:00
```
2025-10-01T12:09:04.2555943Z === RUN   TestAccStreamProcessor_clusterType
2025-10-01T12:09:04.2560680Z === CONT  TestAccStreamProcessor_clusterType
2025-10-01T12:09:04.2561888Z   diagnostic_detail=
2025-10-01T12:09:04.2564718Z    diagnostic_summary="Invalid JSON String Value" diagnostic_attribute="AttributeName(\"pipeline\")" tf_req_id=60ec33d5-d746-0919-eed4-ebc91773a658 tf_resource_type=mongodbatlas_stream_processor tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas diagnostic_severity=ERROR
2025-10-01T12:09:04.2590464Z === NAME  TestAccStreamProcessor_clusterType
2025-10-01T12:09:04.2591100Z     resource_test.go:273: Step 1/1 error: Error running apply: exit status 1
2025-10-01T12:09:04.2591637Z         
2025-10-01T12:09:04.2592116Z         Error: error creating resource
2025-10-01T12:09:04.2592562Z         
2025-10-01T12:09:04.2593074Z           with mongodbatlas_stream_processor.processor,
2025-10-01T12:09:04.2594058Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-01T12:09:04.2594850Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2025-10-01T12:09:04.2607611Z         
2025-10-01T12:09:04.2609110Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd150e503d494afa81e680/streams/test-acc-tf-s-4389468527908497798/processor
2025-10-01T12:09:04.2610761Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-10-01T12:09:04.2611939Z         Detail: Streams Processor with this name (new-processorlmdiy) had a problem
2025-10-01T12:09:04.2613040Z         occur: connection named ClusterConnectionSrclmdiy does not exist. Check
2025-10-01T12:09:04.2614159Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-10-01T12:09:04.2615273Z         [new-processorlmdiy connection named ClusterConnectionSrclmdiy does not
2025-10-01T12:09:04.2616294Z         exist. Check sp.listConnections() for available connections],
2025-10-01T12:09:04.2616973Z         BadRequestDetail: 
2025-10-01T12:09:04.2617491Z --- FAIL: TestAccStreamProcessor_clusterType (1.72s)
```

  - PASS 15 seconds
- 2025-10-02 PASS 13 seconds
- 2025-10-03 PASS 17 seconds
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