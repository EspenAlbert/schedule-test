# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 44) FAIL(x 3)
Success rate: 93.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/connections | qa | 0.06s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/connections | qa | 0.07s
[2025-10-01 12:09](#error-2025-10-01t1209040000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68dd150e503d494afa81e680/streams/test-acc-tf-s-4389468527908497798/processor | dev | 1.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 14 seconds
- 2025-09-04 PASS 12 seconds
- 2025-09-05 PASS 20 seconds
- 2025-09-06 PASS 15 seconds
- 2025-09-07 PASS 13 seconds
- 2025-09-08
  - PASS 15 seconds
  - PASS a minute
  - PASS 11 seconds
- 2025-09-09 PASS 14 seconds
- 2025-09-10 PASS 12 seconds
- 2025-09-11 PASS 11 seconds
- 2025-09-12
  - PASS 13 seconds
  - PASS 10 seconds
- 2025-09-13 PASS 15 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8517263Z === RUN   TestAccStreamProcessor_clusterType
2025-09-14T00:45:38.8520244Z === CONT  TestAccStreamProcessor_clusterType
2025-09-14T00:45:38.8568776Z === NAME  TestAccStreamProcessor_clusterType
2025-09-14T00:45:38.8569058Z     resource_test.go:273: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:45:38.8569151Z         
2025-09-14T00:45:38.8569319Z         Error: error creating resource
2025-09-14T00:45:38.8569411Z         
2025-09-14T00:45:38.8569673Z           with mongodbatlas_stream_connection.cluster_src,
2025-09-14T00:45:38.8570279Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-09-14T00:45:38.8570630Z           25:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-09-14T00:45:38.8570721Z         
2025-09-14T00:45:38.8571367Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/connections
2025-09-14T00:45:38.8571803Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8572117Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8572448Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8572725Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8572873Z         BadRequestDetail: 
2025-09-14T00:45:38.8581961Z   
2025-09-14T00:45:38.8589851Z --- FAIL: TestAccStreamProcessor_clusterType (0.64s)
```

- 2025-09-15
  - PASS 12 seconds
  - PASS 17 seconds
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0730105Z === RUN   TestAccStreamProcessor_clusterType
2025-09-15T06:36:28.0733014Z === CONT  TestAccStreamProcessor_clusterType
2025-09-15T06:36:28.0801603Z === NAME  TestAccStreamProcessor_clusterType
2025-09-15T06:36:28.0801891Z     resource_test.go:273: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:36:28.0801984Z         
2025-09-15T06:36:28.0802161Z         Error: error creating resource
2025-09-15T06:36:28.0802251Z         
2025-09-15T06:36:28.0802522Z           with mongodbatlas_stream_connection.cluster_src,
2025-09-15T06:36:28.0803021Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "cluster_src":
2025-09-15T06:36:28.0803374Z           25:             resource "mongodbatlas_stream_connection" "cluster_src" {
2025-09-15T06:36:28.0803472Z         
2025-09-15T06:36:28.0804135Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/connections
2025-09-15T06:36:28.0804472Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0804799Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0805136Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0805418Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0805714Z         BadRequestDetail: 
2025-09-15T06:36:28.0806033Z --- FAIL: TestAccStreamProcessor_clusterType (0.66s)
```

- 2025-09-16 PASS 11 seconds
- 2025-09-17 PASS 18 seconds
- 2025-09-18 PASS 17 seconds
- 2025-09-19 PASS 12 seconds
- 2025-09-20 PASS 12 seconds
- 2025-09-21 PASS 13 seconds
- 2025-09-22 PASS 16 seconds
- 2025-09-23 PASS 14 seconds
- 2025-09-24 PASS 10 seconds
- 2025-09-25 PASS 13 seconds
- 2025-09-26 PASS 15 seconds
- 2025-09-27 PASS 20 seconds
- 2025-09-28 PASS 12 seconds
- 2025-09-29
  - PASS 14 seconds
  - PASS 16 seconds
- 2025-09-30
  - PASS 15 seconds
  - PASS 16 seconds
  - PASS 15 seconds
  - PASS 15 seconds
  - PASS 15 seconds
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