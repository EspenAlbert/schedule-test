# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleAutoScaling Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 1347.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 21 minutes
- 2026-02-07 PASS 19 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 minutes
- 2026-02-10 PASS 20 minutes
- 2026-02-11 PASS 22 minutes
- 2026-02-12 PASS 18 minutes
- 2026-02-13 PASS 20 minutes
- 2026-02-14 PASS 25 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 19 minutes
- 2026-02-18 PASS 22 minutes
- 2026-02-19 PASS 29 minutes
- 2026-02-20 PASS 21 minutes
- 2026-02-21 PASS 18 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 20 minutes
- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5624920Z === RUN   TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-02-24T00:40:00.6672849Z === CONT  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-02-24T00:40:02.5824818Z   diagnostic_detail=
2026-02-24T00:40:02.5910025Z    diagnostic_severity=ERROR tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_resource_type=mongodbatlas_advanced_cluster diagnostic_summary="Missing Configuration for Required Attribute" diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")"
2026-02-24T00:59:24.8342176Z === NAME  TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-02-24T00:59:24.8343567Z     effective_fields_test.go:216: Step 1/3 error: Error running post-apply refresh plan: exit status 1
2026-02-24T00:59:24.8344306Z         
2026-02-24T00:59:24.8344841Z         Error: error resolving container IDs
2026-02-24T00:59:24.8345134Z         
2026-02-24T00:59:24.8345496Z           with data.mongodbatlas_advanced_cluster.test,
2026-02-24T00:59:24.8346361Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:59:24.8347346Z           39: 		data "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:59:24.8347863Z         
2026-02-24T00:59:24.8348482Z         cluster name = test-acc-tf-c-7618719524180082981, error details: (503 Service
2026-02-24T00:59:24.8349250Z         Unavailable) failed to decode response body: undefined response type
2026-02-24T01:02:28.4425264Z --- FAIL: TestAccAdvancedCluster_effectiveToggleAutoScaling (1347.80s)
```

- 2026-02-25 PASS 22 minutes
- 2026-02-26 PASS 30 minutes
- 2026-02-27 PASS 21 minutes
- 2026-02-28 PASS 18 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 20 minutes
  - PASS 20 minutes
- 2026-03-03 PASS 20 minutes
- 2026-03-04 PASS 20 minutes
- 2026-03-05 PASS 26 minutes
- 2026-03-06 PASS 26 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 21 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 19 minutes
  - PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 19 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 24 minutes
- 2026-03-02 PASS 15 minutes
- 2026-03-03 PASS 19 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
