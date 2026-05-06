# backup/onlinearchive/TestAccBackupRSOnlineArchive_ErrorMessages Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 01:05](#error-2026-04-16t0105000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032c181002038a8a0a6f1/clusters | dev | out_of_capacity | 15.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 40 minutes
- 2026-04-08 PASS 21 minutes
- 2026-04-09 PASS 23 minutes
- 2026-04-10 PASS 42 minutes
- 2026-04-11 PASS 13 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 25 minutes
- 2026-04-14 PASS 13 minutes
- 2026-04-15 PASS 20 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.8284760Z === RUN   TestAccBackupRSOnlineArchive_ErrorMessages
2026-04-16T01:05:00.8287053Z === CONT  TestAccBackupRSOnlineArchive_ErrorMessages
2026-04-16T01:05:00.8331514Z === NAME  TestAccBackupRSOnlineArchive_ErrorMessages
2026-04-16T01:05:00.8332419Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:53:21.793363647Z, ProjectID: 69e032c181002038a8a0a6f1, Cluster name: test-acc-tf-c-8790573429897893455
2026-04-16T01:05:00.8345855Z    test_name=TestAccBackupRSOnlineArchive_ErrorMessages test_terraform_path=/home/runner/work/_temp/a58617e8-ebf4-4c8e-8cbc-b8ef34d3d248/terraform test_working_directory=/tmp/plugintest1336756841
2026-04-16T01:05:00.8347144Z     resource_test.go:219: Step 1/2, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-16T01:05:00.8347663Z         
2026-04-16T01:05:00.8347941Z         Error: Error in create
2026-04-16T01:05:00.8348215Z         
2026-04-16T01:05:00.8348605Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T01:05:00.8349355Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T01:05:00.8350055Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T01:05:00.8350419Z         
2026-04-16T01:05:00.8350858Z         cluster name: test-acc-tf-c-8790573429897893455, API error details:
2026-04-16T01:05:00.8351556Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032c181002038a8a0a6f1/clusters
2026-04-16T01:05:00.8352263Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T01:05:00.8352947Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T01:05:00.8353491Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8353902Z --- FAIL: TestAccBackupRSOnlineArchive_ErrorMessages (15.80s)
```

- 2026-04-17 PASS 19 minutes
- 2026-04-18 PASS 23 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 12 minutes
- 2026-04-21 PASS 22 minutes
- 2026-04-22 PASS 42 minutes
- 2026-04-23 PASS 34 minutes
- 2026-04-24 PASS 15 minutes
- 2026-04-25 PASS 17 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 23 minutes
- 2026-04-28 PASS 28 minutes
- 2026-04-29 PASS 23 minutes
- 2026-04-30 PASS 24 minutes
- 2026-05-01 PASS 24 minutes
- 2026-05-02 PASS 16 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 27 minutes
- 2026-05-05 PASS 43 minutes
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 16 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 15 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 14 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 15 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 20 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 15 minutes
- 2026-05-04 PASS 13 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 13 minutes
