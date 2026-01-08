# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-05 00:46](#error-2026-01-05t0046300000) |  | dev | unknown | 489.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-12-11 PASS 4 minutes
- 2025-12-12 PASS 5 minutes
- 2025-12-13 PASS 4 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 4 minutes
- 2025-12-16 PASS 5 minutes
- 2025-12-17 PASS 4 minutes
- 2025-12-18 PASS 4 minutes
- 2025-12-19 PASS 5 minutes
- 2025-12-20 PASS 4 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 4 minutes
- 2025-12-23 PASS 4 minutes
- 2025-12-24 PASS 4 minutes
- 2025-12-25 PASS 4 minutes
- 2025-12-26 PASS 4 minutes
- 2025-12-27 PASS 4 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 4 minutes
- 2025-12-31 PASS 4 minutes
- 2026-01-01 PASS 4 minutes
- 2026-01-02 PASS 4 minutes
- 2026-01-03 PASS 4 minutes
- 2026-01-04: MISSING
- 2026-01-05

### Error 2026-01-05T00:46:30+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-01-05T00:46:30.784000+00:00-TestAccNetworkRSNetworkPeering_Azure',confidence=1.0,ts_when='3 days ago')

```
2026-01-05T00:46:30.7841236Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-01-05T00:46:30.7841884Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-7999766178400661448
2026-01-05T00:46:30.7848990Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-01-05T00:46:30.7874221Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-01-05T00:46:30.7874745Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-01-05T00:46:30.7875149Z         
2026-01-05T00:46:30.7875537Z         Error: peer networking is in a failed state: RETRYABLE
2026-01-05T00:46:30.7875875Z         
2026-01-05T00:46:30.7876216Z           with mongodbatlas_network_peering.test,
2026-01-05T00:46:30.7876987Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2026-01-05T00:46:30.7877612Z           19: 		resource "mongodbatlas_network_peering" "test" {
2026-01-05T00:46:30.7877950Z         
2026-01-05T00:46:30.7878244Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (489.62s)
```

- 2026-01-06 PASS 4 minutes
- 2026-01-07 PASS 4 minutes
- 2026-01-08 PASS 4 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 4 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 4 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 4 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 4 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 4 minutes
