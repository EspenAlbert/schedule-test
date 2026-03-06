# cluster/cluster/TestAccCluster_WithTags Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036580000) |  | dev | flaky_500 | 1489.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 26 minutes
- 2026-02-07 PASS 23 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 minutes
- 2026-02-10 PASS 23 minutes
- 2026-02-11 PASS 27 minutes
- 2026-02-12 PASS 25 minutes
- 2026-02-13 PASS 24 minutes
- 2026-02-14 PASS 24 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 25 minutes
- 2026-02-17 PASS 25 minutes
- 2026-02-18 PASS 26 minutes
- 2026-02-19 PASS 37 minutes
- 2026-02-20 PASS 26 minutes
- 2026-02-21 PASS 23 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 26 minutes
- 2026-02-24

### Error 2026-02-24T00:36:58+00:00
```
2026-02-24T00:36:58.8950192Z === RUN   TestAccCluster_WithTags
2026-02-24T00:37:02.7272796Z === CONT  TestAccCluster_WithTags
2026-02-24T00:37:04.9746922Z    test_name=TestAccCluster_basicAzure test_terraform_path=/home/runner/work/_temp/5202aa85-26bc-4031-8145-a87a186217d7/terraform test_step_number=1
2026-02-24T00:57:35.0205962Z === NAME  TestAccCluster_WithTags
2026-02-24T00:57:35.0206566Z     resource_cluster_test.go:696: Step 2/3 error: Error running post-apply refresh plan: exit status 1
2026-02-24T00:57:35.0207357Z         
2026-02-24T00:57:35.0208660Z         Error: error reading Advanced Configuration Option  for MongoDB Cluster (test-acc-tf-c-5689539952620223111): (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:35.0209455Z         
2026-02-24T00:57:35.0209738Z           with mongodbatlas_cluster.test,
2026-02-24T00:57:35.0210333Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-02-24T00:57:35.0210900Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-02-24T00:57:35.0211192Z         
2026-02-24T01:01:52.1630393Z --- FAIL: TestAccCluster_WithTags (1489.44s)
```

- 2026-02-25 PASS 26 minutes
- 2026-02-26 PASS 31 minutes
- 2026-02-27 PASS 24 minutes
- 2026-02-28 PASS 26 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 23 minutes
- 2026-03-03 PASS 26 minutes
- 2026-03-04 PASS 23 minutes
- 2026-03-05 PASS 34 minutes
- 2026-03-06 PASS 29 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 22 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 27 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 23 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 25 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 26 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 24 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
