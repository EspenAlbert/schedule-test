# autogen_fast/logintegration/TestAccLogIntegration_basicGCS Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 2 minutes
- 2026-08-07 PASS 2 minutes
- 2026-08-08 PASS 2 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 2 minutes
- 2026-08-11 PASS 2 minutes
- 2026-08-12 PASS 2 minutes
- 2026-08-13 PASS 2 minutes
- 2026-08-14 PASS 2 minutes
- 2026-08-15 PASS 2 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 2 minutes
- 2026-08-18 PASS 2 minutes
- 2026-08-19 PASS 2 minutes
- 2026-08-20 PASS 2 minutes
- 2026-08-21 PASS 2 minutes
- 2026-08-22 PASS 2 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 2 minutes
- 2026-08-25 PASS 2 minutes
- 2026-08-26 PASS 2 minutes
- 2026-08-27 PASS 2 minutes
- 2026-08-28 PASS 2 minutes
- 2026-08-29 PASS 2 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS a minute
- 2026-09-01 PASS 2 minutes
- 2026-09-02 PASS 2 minutes
- 2026-09-03 PASS 2 minutes
- 2026-09-04
  - PASS 3 minutes
  - PASS 2 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-16 00:27](#error-2026-08-16t0027260000) |  | qa | 103.05s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 2 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 2 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16

### Error 2026-08-16T00:27:26+00:00
```
2026-08-16T00:27:26.8770377Z === RUN   TestAccLogIntegration_basicGCS
2026-08-16T00:27:26.8870101Z === CONT  TestAccLogIntegration_basicGCS
2026-08-16T00:27:26.8886310Z === NAME  TestAccLogIntegration_basicGCS
2026-08-16T00:27:26.8886906Z     resource_test.go:168: Step 1/3 error: Error running apply: exit status 1
2026-08-16T00:27:26.8887371Z         
2026-08-16T00:27:26.8889296Z         Error: Error applying IAM policy for storage bucket "b/mongodb-atlas-tf-8qryhxgstw": Error setting IAM policy for storage bucket "b/mongodb-atlas-tf-8qryhxgstw": googleapi: Error 400: Service account mongodb-atlas-3nvizkuew3anapzu@p-h0a5c0dqogy2pum5ycfurxzc.iam.gserviceaccount.com does not exist., invalid
2026-08-16T00:27:26.8890770Z         
2026-08-16T00:27:26.8891267Z           with google_storage_bucket_iam_member.bucket_permission,
2026-08-16T00:27:26.8892513Z           on terraform_plugin_test.tf line 38, in resource "google_storage_bucket_iam_member" "bucket_permission":
2026-08-16T00:27:26.8893421Z           38: 		resource "google_storage_bucket_iam_member" "bucket_permission" {
2026-08-16T00:27:26.8893889Z         
2026-08-16T00:27:26.8894224Z --- FAIL: TestAccLogIntegration_basicGCS (103.52s)
```

- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 2 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 2 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 2 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
