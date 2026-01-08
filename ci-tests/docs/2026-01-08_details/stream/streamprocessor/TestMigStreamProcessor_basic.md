# stream/streamprocessor/TestMigStreamProcessor_basic Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 9 seconds
  - PASS 12 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 13 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 8 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 12 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 9 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 12 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 10 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 12 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 9 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 9 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 12 seconds
- 2026-01-06: MISSING
- 2026-01-07 PASS 10 seconds
- 2026-01-08: MISSING

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-14 01:00](#error-2025-12-14t0100240000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor | qa | 5.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T01:00:24+00:00
```
2025-12-14T01:00:24.2676078Z === RUN   TestMigStreamProcessor_basic
2025-12-14T01:00:24.2677207Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-5052547707247576308
2025-12-14T01:00:24.2678567Z     resource_migration_test.go:11: Creating execution stream instance: test-acc-tf-s-2737192186645208106
2025-12-14T01:00:24.3108965Z === CONT  TestMigStreamProcessor_basic
2025-12-14T01:00:24.3242313Z === NAME  TestMigStreamProcessor_basic
2025-12-14T01:00:24.3242820Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-12-14T01:00:24.3243221Z         
2025-12-14T01:00:24.3243507Z         Error: error creating resource
2025-12-14T01:00:24.3243783Z         
2025-12-14T01:00:24.3244154Z           with mongodbatlas_stream_processor.processor,
2025-12-14T01:00:24.3244850Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_stream_processor" "processor":
2025-12-14T01:00:24.3245501Z           14: 	resource "mongodbatlas_stream_processor" "processor" {
2025-12-14T01:00:24.3245839Z         
2025-12-14T01:00:24.3246595Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/693e05e6064b391b95df3a71/streams/test-acc-tf-s-2737192186645208106/processor
2025-12-14T01:00:24.3247423Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-12-14T01:00:24.3248067Z         Detail: Streams Processor with this name (new-processor1ofp1) had a problem
2025-12-14T01:00:24.3248734Z         occur: no healthy upstream. Reason: Bad Request. Params: [new-processor1ofp1
2025-12-14T01:00:24.3249242Z         no healthy upstream], BadRequestDetail: 
2025-12-14T01:00:24.3249594Z --- FAIL: TestMigStreamProcessor_basic (5.57s)
```

- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 8 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 13 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 9 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 11 seconds
  - PASS 8 seconds
