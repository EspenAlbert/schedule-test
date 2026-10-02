# stream/streamprocessor/TestAccStreamProcessor_withOptionsDLQAutoscaling Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev | 0.10s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev | 1.02s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 22 seconds
- 2026-09-03 PASS 24 seconds
- 2026-09-04 PASS 20 seconds
- 2026-09-05 PASS 23 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 25 seconds
- 2026-09-08 PASS 18 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.8693634Z === RUN   TestAccStreamProcessor_withOptionsDLQAutoscaling
2026-09-09T02:19:32.8718868Z    test_name=TestAccStreamProcessor_withOptionsDLQAutoscaling
2026-09-09T02:19:32.8719836Z     resource_test.go:307: Step 1/5 error: Error running apply: exit status 1
2026-09-09T02:19:32.8720495Z         
2026-09-09T02:19:32.8721007Z         Error: error creating resource
2026-09-09T02:19:32.8721486Z         
2026-09-09T02:19:32.8722135Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.8723378Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.8724566Z           24: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.8725171Z         
2026-09-09T02:19:32.8726640Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.8728100Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.8729271Z         Detail: Streams Processor with this name (new-processor-autoscaling88czc) had
2026-09-09T02:19:32.8730475Z         a problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.8731618Z         Params: [new-processor-autoscaling88czc commandName does not exist in
2026-09-09T02:19:32.8732438Z         context], BadRequestDetail: 
2026-09-09T02:19:32.8755398Z    test_name=TestAccStreamProcessor_withOptionsDLQAutoscaling
2026-09-09T02:19:32.8756832Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-09T02:19:32.8757629Z         
2026-09-09T02:19:32.8758132Z         Error: error deleting resource
2026-09-09T02:19:32.8758620Z         
2026-09-09T02:19:32.8760125Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/connections/ClusterConnection
2026-09-09T02:19:32.8761440Z         DELETE: HTTP 403 Forbidden (Error code:
2026-09-09T02:19:32.8762414Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2026-09-09T02:19:32.8763584Z         name ClusterConnection in stream workspace test-acc-tf-s-7291791236116398531
2026-09-09T02:19:32.8764740Z         has active processors, and cannot be changed. Reason: Forbidden. Params:
2026-09-09T02:19:32.8765884Z         [ClusterConnection test-acc-tf-s-7291791236116398531], BadRequestDetail: 
2026-09-09T02:19:32.8766926Z --- FAIL: TestAccStreamProcessor_withOptionsDLQAutoscaling (0.95s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6620368Z === RUN   TestAccStreamProcessor_withOptionsDLQAutoscaling
2026-09-10T02:13:36.6632331Z    test_terraform_path=/home/runner/work/_temp/8cc92e9c-1de6-438b-a445-0c9c104f9a5a/terraform
2026-09-10T02:13:36.6632885Z     resource_test.go:307: Step 1/5 error: Error running apply: exit status 1
2026-09-10T02:13:36.6633218Z         
2026-09-10T02:13:36.6633483Z         Error: error creating resource
2026-09-10T02:13:36.6633740Z         
2026-09-10T02:13:36.6634071Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6634669Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6635226Z           24: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6635533Z         
2026-09-10T02:13:36.6636155Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6636838Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6637554Z         Detail: Streams Processor with this name (new-processor-autoscalinglguuk) had
2026-09-10T02:13:36.6638140Z         a problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6638828Z         Params: [new-processor-autoscalinglguuk commandName does not exist in
2026-09-10T02:13:36.6639238Z         context], BadRequestDetail: 
2026-09-10T02:13:36.6639589Z --- FAIL: TestAccStreamProcessor_withOptionsDLQAutoscaling (1.22s)
```

- 2026-09-11
  - PASS 27 seconds
  - PASS 25 seconds
- 2026-09-12 PASS 22 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 19 seconds
- 2026-09-15 PASS 18 seconds
- 2026-09-16 PASS 25 seconds
- 2026-09-17 PASS 28 seconds
- 2026-09-18 PASS 19 seconds
- 2026-09-19 PASS 19 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 27 seconds
- 2026-09-22 PASS 22 seconds
- 2026-09-23 PASS 26 seconds
- 2026-09-24 PASS 25 seconds
- 2026-09-25 PASS 23 seconds
- 2026-09-26 PASS 22 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 23 seconds
- 2026-09-29
  - PASS 23 seconds
  - PASS 22 seconds
  - PASS 29 seconds
- 2026-09-30
  - PASS 25 seconds
  - PASS 26 seconds
  - PASS 27 seconds
- 2026-10-01 PASS 24 seconds
- 2026-10-02 PASS 27 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 19 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 23 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 24 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 27 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 27 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 24 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
