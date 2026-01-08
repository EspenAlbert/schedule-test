# stream/streamprocessor/TestAccStreamProcessor_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-12-11 PASS 10 seconds
- 2025-12-12 PASS 9 seconds
- 2025-12-13 PASS 9 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 5 seconds
- 2025-12-16 PASS 11 seconds
- 2025-12-17 PASS 9 seconds
- 2025-12-18 PASS 12 seconds
- 2025-12-19 PASS 5 seconds
- 2025-12-20 PASS 11 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 9 seconds
- 2025-12-23 PASS 11 seconds
- 2025-12-24 PASS 6 seconds
- 2025-12-25 PASS 11 seconds
- 2025-12-26 PASS 7 seconds
- 2025-12-27 PASS 11 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 12 seconds
- 2025-12-31 PASS 6 seconds
- 2026-01-01 PASS 10 seconds
- 2026-01-02 PASS 5 seconds
- 2026-01-03 PASS 10 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 7 seconds
- 2026-01-06 PASS 10 seconds
- 2026-01-07 PASS 7 seconds
- 2026-01-08 PASS 12 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor | qa | 0.10s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2679520Z === RUN   TestAccStreamProcessor_basic
2025-12-14T01:00:24.3111305Z === CONT  TestAccStreamProcessor_basic
2025-12-14T01:00:24.3114587Z   diagnostic_detail=
2025-12-14T01:00:24.3116584Z    diagnostic_severity=ERROR
2025-12-14T01:00:24.3134581Z   
2025-12-14T01:00:24.3193004Z === NAME  TestAccStreamProcessor_basic
2025-12-14T01:00:24.3193475Z     resource_test.go:53: Step 1/3 error: Error running apply: exit status 1
2025-12-14T01:00:24.3193851Z         
2025-12-14T01:00:24.3194140Z         Error: error creating resource
2025-12-14T01:00:24.3194420Z         
2025-12-14T01:00:24.3194800Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.3195515Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.3196170Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.3196510Z         
2025-12-14T01:00:24.3197285Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor
2025-12-14T01:00:24.3198117Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.3198767Z         Detail: Streams Processor with this name (new-processorjn09q) had a problem
2025-12-14T01:00:24.3199441Z         occur: upstream connect error or disconnect/reset before headers. retried and
2025-12-14T01:00:24.3200111Z         the latest reset reason: remote connection failure, transport failure reason:
2025-12-14T01:00:24.3200885Z         delayed connect error: Connection refused. Reason: Bad Request. Params:
2025-12-14T01:00:24.3201520Z         [new-processorjn09q upstream connect error or disconnect/reset before
2025-12-14T01:00:24.3202150Z         headers. retried and the latest reset reason: remote connection failure,
2025-12-14T01:00:24.3202762Z         transport failure reason: delayed connect error: Connection refused],
2025-12-14T01:00:24.3203330Z         BadRequestDetail: 
2025-12-14T01:00:24.3221481Z    test_name=TestAccStreamProcessor_JSONWhiteSpaceFormat test_terraform_path=/home/runner/work/_temp/4599e4d6-c372-4194-af63-a6470de1abca/terraform
2025-12-14T01:00:24.3233548Z --- FAIL: TestAccStreamProcessor_basic (0.95s)
```

- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 5 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 9 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 5 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 8 seconds
  - PASS 7 seconds
