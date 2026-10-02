# stream/streamprocessor/TestAccStreamProcessor_withTier Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor | dev | 0.07s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor | dev | 0.07s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 10 seconds
- 2026-09-03 PASS 11 seconds
- 2026-09-04 PASS 10 seconds
- 2026-09-05 PASS 11 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 12 seconds
- 2026-09-08 PASS 10 seconds
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.8660102Z === RUN   TestAccStreamProcessor_withTier
2026-09-09T02:19:32.8679066Z   
2026-09-09T02:19:32.8679762Z     resource_test.go:274: Step 1/3 error: Error running apply: exit status 1
2026-09-09T02:19:32.8680412Z         
2026-09-09T02:19:32.8680935Z         Error: error creating resource
2026-09-09T02:19:32.8681421Z         
2026-09-09T02:19:32.8682079Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.8683334Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.8684508Z           18: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.8685113Z         
2026-09-09T02:19:32.8686596Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-s-7291791236116398531/processor
2026-09-09T02:19:32.8688059Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.8689180Z         Detail: Streams Processor with this name (new-processor-tier1wr8k) had a
2026-09-09T02:19:32.8690333Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.8691463Z         Params: [new-processor-tier1wr8k commandName does not exist in context],
2026-09-09T02:19:32.8692236Z         BadRequestDetail: 
2026-09-09T02:19:32.8692958Z --- FAIL: TestAccStreamProcessor_withTier (0.66s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6600855Z === RUN   TestAccStreamProcessor_withTier
2026-09-10T02:13:36.6612890Z    test_step_number=1
2026-09-10T02:13:36.6613276Z     resource_test.go:274: Step 1/3 error: Error running apply: exit status 1
2026-09-10T02:13:36.6613624Z         
2026-09-10T02:13:36.6613888Z         Error: error creating resource
2026-09-10T02:13:36.6614142Z         
2026-09-10T02:13:36.6614473Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.6615080Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.6615639Z           18: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.6615940Z         
2026-09-10T02:13:36.6616571Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-s-7356642010655541327/processor
2026-09-10T02:13:36.6617397Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.6618226Z         Detail: Streams Processor with this name (new-processor-tiers9e6v) had a
2026-09-10T02:13:36.6618783Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.6619331Z         Params: [new-processor-tiers9e6v commandName does not exist in context],
2026-09-10T02:13:36.6619725Z         BadRequestDetail: 
2026-09-10T02:13:36.6620012Z --- FAIL: TestAccStreamProcessor_withTier (0.65s)
```

- 2026-09-11
  - PASS 12 seconds
  - PASS 10 seconds
- 2026-09-12 PASS 11 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 8 seconds
- 2026-09-15 PASS 10 seconds
- 2026-09-16 PASS 9 seconds
- 2026-09-17 PASS 11 seconds
- 2026-09-18 PASS 9 seconds
- 2026-09-19 PASS 9 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 12 seconds
- 2026-09-22 PASS 10 seconds
- 2026-09-23 PASS 13 seconds
- 2026-09-24 PASS 10 seconds
- 2026-09-25 PASS 10 seconds
- 2026-09-26 PASS 10 seconds
- 2026-09-27: MISSING
- 2026-09-28 PASS 11 seconds
- 2026-09-29
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 13 seconds
- 2026-09-30
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 13 seconds
- 2026-10-01 PASS 11 seconds
- 2026-10-02 PASS 13 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 10 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 12 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 11 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 14 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 12 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 13 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
